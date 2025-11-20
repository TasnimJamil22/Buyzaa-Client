"use client";
import { Divider } from "@heroui/divider";
import Link from "next/link";

import { useCart } from "@/context/cart.provider";
import { useUser } from "@/context/user.provider";

export default function MyCart() {
  const { user } = useUser();
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  //  Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

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
                    className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded "
                    onClick={() => increaseQuantity(item.productId)}
                  >
                    +
                  </button>

                  {/* <span className="text-sm">{item.quantity}</span> */}
                  <span className="text-sm text-green-600">
                    {item.quantity}
                  </span>

                  <button
                    className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded"
                    onClick={() => decreaseQuantity(item.productId)}
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
                  className="text-red-500 hover:text-red-700"
                  title="Remove item"
                  onClick={() => removeFromCart(item.productId)}
                >
                  X
                </button>
              </div>
              <Divider />
            </li>
          ))}
        </ul>
      )}
      <div className="flex  py-5 w-full  rounded-sm justify-between">
        <span className="w-1/2 text-center py-5 bg-orange-400 rounded-l-md">
          {/* calculate total */}Total ${total.toFixed(2)}
        </span>
        <Link
          href="/profile/checkout"
          // href={`/profile/payment/{paymentId}`}
          className="  text-center w-1/2 mx-auto  py-5 bg-accent rounded-r-md hover:bg-red-300"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
