"use client";
import BZModal from "@/components/modals/BZModal";
import { useGetMyPayments } from "@/hooks/payment.hook";
import { TPayment } from "@/types";
import { useState } from "react";

type PaymentStatus = "Paid" | "Failed" | "Pending";

export default function PaymentHistory() {
  const [selectedPayment, setSelectedPayment] = useState<TPayment | null>(null);
  const { data } = useGetMyPayments();
  const myPayments: TPayment[] = data?.data || [];
  const statusColor: Record<string, string> = {
    succeeded: "bg-green-100 text-green-700",
    failed: "bg-red-100 text-red-700",
    pending: "bg-yellow-100 text-yellow-700",
  };

  console.log(myPayments);

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
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {myPayments.map((p) => (
                <tr key={p._id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium max-w-[150px] truncate">
                    {p.transactionId}
                  </td>
                  <td className="py-3 px-4">
                    {p.createdAt
                      ? new Date(p.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="py-3 px-4">{p.paymentMethod}</td>
                  <td className="py-3 px-4 font-semibold">
                    ${(p.amount / 100).toFixed(2)}
                  </td>
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
                    {/* view details of a payment with modal */}
                    <BZModal
                      buttonText="View"
                      title="Payment Details"
                      body={
                        <div className="space-y-2 text-sm">
                          <p>
                            <span className="font-semibold">
                              Transaction ID:
                            </span>
                            {p.transactionId}
                          </p>
                          <p>
                            <span className="font-semibold">
                              Payment Method:
                            </span>
                            {p.paymentMethod.join(", ")}
                          </p>
                          <p>
                            <span className="font-semibold">Amount:</span> $
                            {(p.amount / 100).toFixed(2)}
                            {p.currency.toUpperCase()}
                          </p>
                          <p>
                            <span className="font-semibold">Status:</span>
                            {p.status}
                          </p>

                          <p>
                            <span className="font-semibold">Date:</span>
                            {p.createdAt
                              ? new Date(p.createdAt).toLocaleString()
                              : "N/A"}
                          </p>
                        </div>
                      }
                    />
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
