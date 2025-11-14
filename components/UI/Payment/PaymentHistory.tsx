//dynamically fetched getAllPayments() and getMyPayments()...so both can use it
"use client";
import BZModal from "@/components/modals/BZModal";
import { useUser } from "@/context/user.provider";
import { useGetMyPayments, useGetAllPayments } from "@/hooks/payment.hook";
import { TPayment } from "@/types";
import { useState } from "react";

interface PaymentHistoryProps {
  type?: "my" | "all"; // default = "my"
}

export default function PaymentHistory({ type }: PaymentHistoryProps) {
  const { user } = useUser();
  const [selectedPayment, setSelectedPayment] = useState<TPayment | null>(null);

  // dynamic fetch based on type
  const { data } = type === "all" ? useGetAllPayments() : useGetMyPayments();

  const payments: TPayment[] = data?.data || [];

  const statusColor: Record<string, string> = {
    succeeded: "bg-green-100 text-green-700",
    failed: "bg-red-100 text-red-700",
    pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="  py-10   mt-20">
      <h1 className="text-4xl font-bold text-yellow-500 mb-6 font-dancing">
        {type === "all" ? "All Payments" : "My Payments"}
      </h1>
      <div className="max-w-5xl mx-auto shadow-lg rounded-2xl  ">
        <div className="overflow-x-auto    rounded-lg">
          <table className="min-w-full rounded-lg ">
            <thead>
              <tr className="text-left text-default-500 bg-default-100">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Transaction ID</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Method</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((p, index) => (
                <tr key={p._id} className="border-t">
                  <td className="py-3 px-4">{index + 1}.</td>
                  <td className="py-3 px-4 max-w-[150px] truncate">
                    {p.transactionId}
                  </td>

                  <td className="py-3 px-4">
                    {p.createdAt
                      ? new Date(p.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>

                  <td className="py-3 px-4">
                    {Array.isArray(p.paymentMethod)
                      ? p.paymentMethod.join(", ")
                      : p.paymentMethod}
                  </td>

                  <td className="py-3 px-4">${(p.amount / 100).toFixed(2)}</td>

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
                    <BZModal
                      buttonText="View"
                      title="Payment Details"
                      body={
                        <div className="space-y-2 text-sm">
                          <p>
                            <span className="font-semibold">
                              Transaction ID:
                            </span>{" "}
                            {p.transactionId}
                          </p>
                          {user?.role === "ADMIN" && (
                            <>
                              <p>
                                <span className="font-semibold">
                                  User's Email :{" "}
                                </span>
                                {p.email}
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Order Id:{" "}
                                </span>
                                {(p.orderId as any)?.orderNumber ?? "N/A"}
                              </p>
                            </>
                          )}

                          <p>
                            <span className="font-semibold">
                              Payment Method:
                            </span>{" "}
                            {Array.isArray(p.paymentMethod)
                              ? p.paymentMethod.join(", ")
                              : p.paymentMethod}
                          </p>

                          <p>
                            <span className="font-semibold">Amount:</span> $
                            {(p.amount / 100).toFixed(2)}{" "}
                            {p.currency.toUpperCase()}
                          </p>

                          <p>
                            <span className="font-semibold">Status:</span>{" "}
                            {p.status}
                          </p>

                          <p>
                            <span className="font-semibold">Date:</span>{" "}
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

//only works with getMyPayments()
// "use client";
// import BZModal from "@/components/modals/BZModal";
// import { useGetMyPayments } from "@/hooks/payment.hook";
// import { TPayment } from "@/types";
// import { useState } from "react";

// type PaymentStatus = "Paid" | "Failed" | "Pending";

// export default function PaymentHistory() {
//   const [selectedPayment, setSelectedPayment] = useState<TPayment | null>(null);
//   const { data } = useGetMyPayments();
//   const myPayments: TPayment[] = data?.data || [];
//   const statusColor: Record<string, string> = {
//     succeeded: "bg-green-100 text-green-700",
//     failed: "bg-red-100 text-red-700",
//     pending: "bg-yellow-100 text-yellow-700",
//   };

//   console.log(myPayments);

//   return (
//     <div className="min-h-screen  py-10 px-6 mt-20   ">
//       <div className="max-w-5xl mx-auto shadow-lg rounded-2xl p-8">
//         <h1 className="text-4xl font-bold text-yellow-500 mb-6 font-dancing">
//           Payment History
//         </h1>

//         <div className="overflow-x-auto  bg-default-100 rounded-lg">
//           <table className="min-w-full   rounded-lg">
//             <thead>
//               <tr className="  text-left text-default-500">
//                 <th className="py-3 px-4">Transaction ID</th>
//                 <th className="py-3 px-4">Date</th>
//                 <th className="py-3 px-4">Method</th>
//                 <th className="py-3 px-4">Amount</th>
//                 <th className="py-3 px-4">Status</th>
//                 <th className="py-3 px-4">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {myPayments.map((p) => (
//                 <tr key={p._id} className="border-t  ">
//                   <td className="py-3 px-4   max-w-[150px] truncate">
//                     {p.transactionId}
//                   </td>
//                   <td className="py-3 px-4">
//                     {p.createdAt
//                       ? new Date(p.createdAt).toLocaleDateString()
//                       : "N/A"}
//                   </td>
//                   <td className="py-3 px-4">{p.paymentMethod}</td>
//                   <td className="py-3 px-4  ">
//                     ${(p.amount / 100).toFixed(2)}
//                   </td>
//                   <td className="py-3 px-4">
//                     <span
//                       className={`px-3 py-1 text-sm rounded-full font-medium ${
//                         statusColor[p.status]
//                       }`}
//                     >
//                       {p.status}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4">
//                     {/* view details of a payment with modal */}
//                     <BZModal
//                       buttonText="View"
//                       title="Payment Details"
//                       body={
//                         <div className="space-y-2 text-sm">
//                           <p>
//                             <span className="font-semibold">
//                               Transaction ID:
//                             </span>
//                             {p.transactionId}
//                           </p>
//                           <p>
//                             <span className="font-semibold">
//                               Payment Method:
//                             </span>
//                             {p.paymentMethod.join(", ")}
//                           </p>
//                           <p>
//                             <span className="font-semibold">Amount:</span> $
//                             {(p.amount / 100).toFixed(2)}
//                             {p.currency.toUpperCase()}
//                           </p>
//                           <p>
//                             <span className="font-semibold">Status:</span>
//                             {p.status}
//                           </p>

//                           <p>
//                             <span className="font-semibold">Date:</span>
//                             {p.createdAt
//                               ? new Date(p.createdAt).toLocaleString()
//                               : "N/A"}
//                           </p>
//                         </div>
//                       }
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
