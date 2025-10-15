import { useCart } from "@/context/cart.provider";
import { Divider } from "@heroui/divider";
import { useState } from "react";
import CartQuantity from "./CartQuantity";

export default function MyCart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <div>
      {cartItems?.length === 0 ? (
        <div className="text-center text-default-900 rounded-lg">
          🛒 Your cart is empty
        </div>
      ) : (
        <ul className="">
          {cartItems?.map((item) => (
            // <li
            //   key={item.productId}
            //   className="flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow-sm p-3 hover:bg-yellow-50 transition-all"
            // >
            //   <span className="font-semibold text-gray-800">{item.name}</span>
            //   <span className="text-sm text-gray-600">
            //     Qty: {item.quantity}
            //   </span>
            // </li>
            <li key={item.productId} className="">
              {/* Quantity controls (vertical) */}

              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center  px-2 py-1">
                  <button
                    onClick={() => increaseQuantity(item.productId)}
                    className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded "
                  >
                    +
                  </button>

                  {/* <span className="text-sm">{item.quantity}</span> */}
                  <span className="text-sm text-green-600">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => decreaseQuantity(item.productId)}
                    className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded"
                  >
                    −
                  </button>
                </div>

                <div className="flex flex-col mr-5 w-3/5">
                  {/* Product name */}
                  <span>{item.name}</span>
                  <span className="text-sm text-default-500">
                    ${item.price}/each
                  </span>
                </div>
                {/* price per quantity */}
                <div>
                  {item.quantity === 1 ? (
                    <span>${item.price}</span>
                  ) : (
                    <span>${(item.price * item.quantity).toFixed(2)} </span>
                    // <span>${item.price * item.quantity} </span>
                  )}
                </div>
                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove item"
                >
                  X
                </button>
              </div>
              <Divider />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
