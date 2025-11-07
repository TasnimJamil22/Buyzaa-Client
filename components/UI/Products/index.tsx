// "use client";

// import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
// import { Button } from "@heroui/button";
// import { Image } from "@heroui/image";
// import { TProduct } from "@/types";
// import { Link } from "@heroui/link";
// import Cart from "../Cart";
// import { SetStateAction, useState } from "react";
// import CartQuantity from "../Cart/CartQuantity";
// import { useUser } from "@/context/user.provider";

// interface IProps {
//   product: TProduct;
// }

// interface CartItem {
//   name: string;
//   quantity: number;
// }
// export default function ProductCard({ product }: IProps) {
//   const { user } = useUser();
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const { _id, name, description, price, quantity, category, images } =
//     product || {};
//   const handleAddToCart = (name: string, quantity: number) => {
//     const newItem = { name: product.name, quantity };

//     // Add to cart array
//     setCartItems((prev) => [...prev, newItem]);
//   };

//   return (
//     <Card className="max-w-xs shadow-lg rounded-lg overflow-hidden">
//       {/* Product Image */}
//       <CardHeader>
//         <h1></h1>
//         <Image
//           alt="Sunglasses"
//           src={images && images.length > 0 ? images[0] : undefined}
//           className="w-96 h-48 object-cover mx-auto "
//         />
//       </CardHeader>

//       {/* Product Info */}
//       <CardBody className="px-4 py-3">
//         <Link
//           href={`/products/${_id}`}
//           className="relative px-4 py-2 text-lg font-medium text-[#a17c37] hover:text-[#8b6d2f] transition-all duration-300
//                    after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-[#e0c066] to-[#a17c37]
//                    hover:after:w-full after:transition-all after:duration-300"
//         >
//           <h3 className=" font-semibold text-2xl">{name}</h3>
//         </Link>
//         <p className="text-pink-900 ">
//           Category:<span className="text-pink-800">{category?.name}</span>
//         </p>
//         <p className="text-sm text-gray-500">{description}</p>
//         <p className="text-sm text-gray-500"></p>

//         {/* Price + Stock */}
//         <div className="mt-3 flex items-center justify-between">
//           <span className="text-xl font-bold text-pink-600">${price}</span>
//           <span className="text-sm text-green-600">In Stock</span>
//         </div>
//       </CardBody>
//       <CardFooter>
//         {/* <CartQuantity product={product} /> */}
//         {/* Only for user Add to Cart button */}
//         {user?.role === "USER" && <CartQuantity product={product} />}
//       </CardFooter>
//     </Card>
//   );
// }
"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { TProduct } from "@/types";
import { Link } from "@heroui/link";
import { useState } from "react";
import CartQuantity from "../Cart/CartQuantity";
import { useUser } from "@/context/user.provider";

interface IProps {
  product: TProduct;
}

interface CartItem {
  name: string;
  quantity: number;
}

export default function ProductCard({ product }: IProps) {
  const { user } = useUser();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { _id, name, description, price, category, images } = product || {};

  const handleAddToCart = (name: string, quantity: number) => {
    const newItem = { name: product.name, quantity };
    setCartItems((prev) => [...prev, newItem]);
  };

  return (
    <Card
      className="max-w-xs shadow-lg rounded-lg overflow-hidden border border-[#f1e4c3] 
                 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl 
                 hover:border-[#d6b770]"
    >
      {/* Product Image */}
      <CardHeader>
        <Image
          alt="Sunglasses"
          src={images && images.length > 0 ? images[0] : undefined}
          className="w-96 h-48 object-cover mx-auto transition-transform duration-500 hover:scale-105"
        />
      </CardHeader>

      {/* Product Info */}
      <CardBody className="px-4 py-3">
        <Link
          href={`/products/${_id}`}
          className="relative px-4 py-2 text-lg font-medium text-[#a17c37] hover:text-[#8b6d2f] transition-all duration-300 
                   after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-[#e0c066] to-[#a17c37]
                   hover:after:w-full after:transition-all after:duration-300"
        >
          <h3 className="font-semibold text-2xl">{name}</h3>
        </Link>
        <p className="text-pink-900 ">
          Category:<span className="text-pink-800">{category?.name}</span>
        </p>
        <p className="text-sm text-gray-500">{description}</p>

        {/* Price + Stock */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600">${price}</span>
          <span className="text-sm text-green-600">In Stock</span>
        </div>
      </CardBody>

      <CardFooter>
        {user?.role !== "ADMIN" && <CartQuantity product={product} />}
      </CardFooter>
    </Card>
  );
}
