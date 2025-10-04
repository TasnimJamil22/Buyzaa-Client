"use client";

import { useState } from "react";
import { TProduct } from "@/types"; // your product interface
import { Button } from "@heroui/button";

interface CartItem extends TProduct {
  quantity: number;
}

interface CartProps {
  initialItems?: CartItem[];
}

export default function Cart({ initialItems = [] }: CartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialItems);

  // Increase quantity
  const increaseQty = (id?: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id?: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id?: string) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            {/* Product Info */}
            <div className="flex items-center space-x-4">
              <img
                src={item.images?.[0] || "/placeholder.jpg"}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.category}</p>
                <p className="text-gray-700 font-semibold">${item.price}</p>
              </div>
            </div>

            {/* Quantity and Remove */}
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => decreaseQty(item._id)}
                  className="px-3 py-1 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item._id)}
                  className="px-3 py-1 hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              <Button variant="bordered" onClick={() => removeItem(item._id)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Checkout
        </Button>
      </div>
    </div>
  );
}
