"use client";
import { Button } from "@heroui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { DeleteIcon } from "lucide-react";

import BZModal from "@/components/modals/BZModal";
import PaymentHistory from "@/components/UI/Payment/PaymentHistory";
import { useDeleteOrder, useGetAllOrders } from "@/hooks/checkout.hook";
import { TItem, TOrder } from "@/types";

export default function Orders() {
  const { data } = useGetAllOrders();
  const orders: TOrder[] = data?.data || [];

  // console.log(orders);
  const { mutate: deleteOrder } = useDeleteOrder();

  return (
    <>
      <div>
        {/* <h1>This is orders page</h1> */}
        <h1 className="text-4xl text-yellow-600  font-dancing">
          Orders history
        </h1>

        {/* user table */}
        <Table aria-label="Example static collection table mb-5">
          <TableHeader>
            <TableColumn>#</TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>Email</TableColumn>

            <TableColumn>Created At</TableColumn>
            <TableColumn>Cost</TableColumn>

            <TableColumn>Details</TableColumn>
            <TableColumn>Payment Status</TableColumn>
            <TableColumn>Remove</TableColumn>
          </TableHeader>
          <TableBody>
            {orders?.map((order: any, index) => (
              <TableRow key={order._id}>
                <TableCell>{index + 1}.</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.email}</TableCell>
                {/* <TableCell>{order.createdAt}</TableCell> */}
                <TableCell>
                  {new Date(order.createdAt).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </TableCell>
                <TableCell>${order.totalAmount}</TableCell>
                <TableCell>
                  <BZModal
                    body={
                      <div className="space-y-3 p-4   rounded-md text-sm">
                        <p>
                          <span className="font-semibold">Order ID:</span>
                          {order.orderNumber}
                        </p>
                        <p>
                          <span className="font-semibold">Customer Name:</span>
                          {order.name}
                        </p>

                        <p>
                          <span className="font-semibold">Email:</span>
                          {order.email}
                        </p>
                        <p>
                          <span className="font-semibold">Mobile No:</span>
                          {order.mobileNo}
                        </p>
                        <p>
                          <span className="font-semibold">Address:</span>
                          {order.address}, {order.city}
                        </p>
                        <p>
                          <span className="font-semibold">Delivery Date:</span>
                          {order.deliveryDate
                            ? new Date(order.deliveryDate).toLocaleString()
                            : "N/A"}
                        </p>
                        <p>
                          <span className="font-semibold">Products:</span>
                          {order.cartItems
                            .map((p: TItem) => `${p.name} x${p.quantity}`)
                            .join(", ")}
                        </p>
                        <p>
                          <span className="font-semibold">Total:</span> $
                          {order.totalAmount.toFixed(2)}
                        </p>
                        {/* <p>
                          <span className="font-semibold">Transaction Id:</span>
                          {order.payment.transactionId}
                        </p> */}
                        <p>
                          <span className="font-semibold">Payment Status:</span>
                          {order.payment && "status" in order.payment
                            ? order.payment.status
                            : "Pending"}
                        </p>
                      </div>
                    }
                    buttonText="View"
                    title="Order Details"
                  />
                </TableCell>
                <TableCell>
                  {/* <Link href={`/profile/payment/${order._id}`}>Pay</Link> */}
                  {order.payment?.isPaid ? (
                    <Button
                      disabled
                      className="bg-green-700 text-white cursor-not-allowed"
                    >
                      Successful
                    </Button>
                  ) : (
                    // <Link href={`/profile/payment/${order._id}`}>
                    <Button>Pending</Button>
                    // </Link>
                  )}
                </TableCell>
                <TableCell>
                  <DeleteIcon
                    className="cursor-pointer text-red-500"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this order?"
                        )
                      ) {
                        deleteOrder(order._id);
                      }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {orders?.length === 0 && (
          <p className="text-center text-default-500 p-5">No orders found</p>
        )}
      </div>
      <div>
        {/* payment history */}
        <PaymentHistory type="all" />
      </div>
    </>
  );
}
