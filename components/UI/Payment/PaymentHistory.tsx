"use client";
import { useState } from "react";

type PaymentStatus = "Paid" | "Failed" | "Pending";

interface Payment {
  id: string;
  date: string;
  method: string;
  amount: number;
  status: PaymentStatus;
}

export default function PaymentHistory() {
  const [payments] = useState<Payment[]>([
    {
      id: "TXN-1001",
      date: "2025-11-05",
      method: "Credit Card",
      amount: 2450,
      status: "Paid",
    },
    {
      id: "TXN-1002",
      date: "2025-11-03",
      method: "bKash",
      amount: 890,
      status: "Failed",
    },
    {
      id: "TXN-1003",
      date: "2025-10-28",
      method: "Cash on Delivery",
      amount: 1350,
      status: "Pending",
    },
  ]);

  const statusColor: Record<PaymentStatus, string> = {
    Paid: "bg-green-100 text-green-700",
    Failed: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Payment History
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700">
                <th className="py-3 px-4">Transaction ID</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Method</th>
                <th className="py-3 px-4">Amount (৳)</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{p.id}</td>
                  <td className="py-3 px-4">{p.date}</td>
                  <td className="py-3 px-4">{p.method}</td>
                  <td className="py-3 px-4 font-semibold">৳{p.amount}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full font-medium ${
                        statusColor[p.status]
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-indigo-600 hover:underline text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
