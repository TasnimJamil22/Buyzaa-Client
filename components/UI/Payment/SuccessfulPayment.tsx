"use client";

import { TOrder } from "@/types";
import Link from "next/link";
import React from "react";

interface IProps {
  transactionId: string;
}

export default function PaymentSuccess({ transactionId }: IProps) {
  return (
    <div className="text-center p-6">
      {/* Success Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 rounded-full p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold   mb-2">Payment Successful!</h2>
      {/* transaction id */}
      <h2 className="text-xl font-semibold   mb-2">
        Transaction ID: {transactionId}
      </h2>

      {/* Description */}
      <p className="text-gray-500 mb-6">
        Your payment has been processed successfully. Thank you for your
        purchase 💚
      </p>

      {/* Continue Button */}
      <div className="flex justify-center">
        <button className="px-6 py-2.5 rounded-xl bg-green-800 hover:bg-green-700 text-white font-medium transition-all">
          <Link href="/profile/orders">Go to my orders</Link>
        </button>
      </div>
    </div>
  );
}
