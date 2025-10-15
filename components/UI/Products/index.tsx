"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { TProduct } from "@/types";
import { Link } from "@heroui/link";
import Cart from "../Cart";
import { SetStateAction, useState } from "react";
import CartQuantity from "../Cart/CartQuantity";

interface IProps {
  product: TProduct;
}

interface CartItem {
  name: string;
  quantity: number;
}
export default function ProductCard({ product }: IProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { _id, name, description, price, quantity, category, images } =
    product || {};
  const handleAddToCart = (name: string, quantity: number) => {
    const newItem = { name: product.name, quantity };

    // Add to cart array
    setCartItems((prev) => [...prev, newItem]);
  };

  return (
    <Card className="max-w-xs shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <CardHeader>
        <h1></h1>
        <Image
          alt="Sunglasses"
          src={images && images.length > 0 ? images[0] : undefined}
          className="w-96 h-48 object-cover mx-auto "
        />
      </CardHeader>

      {/* Product Info */}
      <CardBody className="px-4 py-3">
        <Link href={`/products/${_id}`}>
          <h3 className=" font-semibold text-2xl">{name}</h3>
        </Link>
        <p className="text-pink-900 ">
          Category:<span className="text-pink-800">{category?.name}</span>
        </p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-500"></p>

        {/* Price + Stock */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600">${price}</span>
          <span className="text-sm text-green-600">In Stock</span>
        </div>
      </CardBody>
      <CardFooter>
        <CartQuantity product={product} />
      </CardFooter>
    </Card>
  );
}
