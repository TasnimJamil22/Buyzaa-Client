//
//
//
//this is localstorage settings
import { useCart } from "@/context/cart.provider";
import { TProduct } from "@/types";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";

interface IProps {
  product: TProduct;
}

export default function CartQuantity({ product }: IProps) {
  const [selectQuantity, setSelectQuantity] = useState(1);

  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const handleAddToCart = () => {
    addToCart({
      productId: product._id || "",
      name: product.name,
      quantity: selectQuantity,
      price: product.price || 0, // optional but good to include
    });
  };
  const existingItem = cartItems.find((item) => item.productId === product._id);

  return (
    <div className="flex justify-center  gap-3  rounded-lg w-full">
      {existingItem ? (
        // <div className="flex items-center gap-3">
        <div className="flex items-center  py-1 rounded-md overflow-hidden w-full bg-red-400">
          <button
            onClick={() => {
              const existingItem = cartItems.find(
                (item) => item.productId === product._id
              );
              existingItem?.quantity! > 1
                ? decreaseQuantity(product._id || "")
                : removeFromCart(product._id || "");
              // if (existingItem) {
              //   // decrease from context (cart)
              //   decreaseQuantity(product._id || "");
              // } else {
              //   // decrease from local
              //   setSelectQuantity((prev) => (prev > 1 ? prev - 1 : 1));
              // }
            }}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition rounded-sm"
          >
            −
          </button>

          <span className=" mx-auto">{existingItem.quantity} in bag</span>
          <button
            onClick={() => {
              const existingItem = cartItems.find(
                (item) => item.productId === product._id
              );
              if (existingItem) {
                // increase quantity in cart
                increaseQuantity(product._id || "");
              } else {
                // increase locally
                setSelectQuantity((prev) => prev + 1);
              }
            }}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition rounded-sm"
          >
            +
          </button>
        </div>
      ) : (
        // </div>
        <Button
          onClick={handleAddToCart}
          color="primary"
          className="w-full bg-accent hover:bg-orange-300  text-default-700 rounded-lg font-medium px-6 py-2 transition-all shadow-sm text-center mx-auto"
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
}

//first work of inc and dec
{
  /* <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() =>
              setSelectQuantity((prev) => (prev > 1 ? prev - 1 : 1))
            }
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
          >
            −
          </button>

          <input
            min="1"
            type="number"
            value={selectQuantity}
            onChange={(e) => setSelectQuantity(Number(e.target.value))}
            className="w-14 text-center py-1 border-x border-gray-200 focus:outline-none"
          />

          <button
            // onClick={() => setSelectQuantity((prev) => prev + 1)}
            onClick={() => increaseQuantity(product._id || "")}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
          >
            +
          </button>
        </div> */
}

//
//
//
//this is without inc and dec functionalities implimentation,
// import { useCart } from "@/context/cart.provider";
// import { TProduct } from "@/types";
// import { Button } from "@heroui/button";
// import { useState } from "react";

// interface IProps {
//   product: TProduct;
//   //   handleAddToCart: (name: string, quantity: number) => void;
// }
// export default function CartQuantity({ product }: IProps) {
//   const [selectQuantity, setSelectQuantity] = useState(1);
//   const { addToCart } = useCart();
//   return (
//     <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
//       {/* Quantity Section */}
//       <div className="flex items-center gap-3">
//         <span className="text-sm font-medium text-gray-700">Qty:</span>

//         <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//           <button
//             onClick={() =>
//               setSelectQuantity((prev) => (prev > 1 ? prev - 1 : 1))
//             }
//             className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
//           >
//             −
//           </button>

//           <input
//             min="1"
//             value={selectQuantity}
//             onChange={(e) => setSelectQuantity(Number(e.target.value))}
//             className="w-14 text-center py-1 border-x border-gray-200 focus:outline-none"
//           />

//           <button
//             onClick={() => setSelectQuantity((prev) => prev + 1)}
//             className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart Button */}
//       <Button
//         onClick={() =>
//           addToCart(
//             { _id: product._id || "", name: product.name }, // empty string if undefined
//             selectQuantity
//           )
//         }
//         color="primary"
//         className="w-full sm:w-auto rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 transition-all shadow-sm"
//       >
//         Add to Cart
//       </Button>
//     </div>
//   );
// }

//
//
//
//
//
//
//this is my own making
// <div>
//   <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
//     {/* Quantity Section */}
//     <div className="flex items-center gap-2">
//       <label className="text-sm font-medium text-gray-700">Qty:</label>
//       <input
//         type="number"
//         min="1"
//         value={selectQuantity}
//         onChange={(e) => setSelectQuantity(Number(e.target.value))}
//         className="w-16 border border-gray-300 rounded-md text-center py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//       />
//     </div>

//     {/* Add to Cart Button */}
//     <Button
//       onClick={() => handleAddToCart()}
//       color="primary"
//       className="w-full sm:w-auto rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 transition-all shadow-sm"
//     >
//       Add to Cart
//     </Button>
//   </div>
// </div>
