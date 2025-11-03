"use client";
import { useGetAllOrders, useGetMyOrders } from "@/hooks/checkout.hook";
import { TOrder } from "@/types";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";

export default function Orders() {
  // const { data } = useGetAllOrders();
  const { data } = useGetMyOrders();
  const orders: TOrder[] = data?.data || [];
  console.log(orders);
  return (
    <div>
      <h1>This is orders page</h1>

      {/* user table */}
      <Table aria-label="Example static collection table mb-5">
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Email</TableColumn>

          <TableColumn>Created At</TableColumn>
          <TableColumn>Cost</TableColumn>

          <TableColumn>Details</TableColumn>
          <TableColumn>Pay</TableColumn>
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
                <Link href={`/admin/manageUser/userList/${order._id}`}>
                  detalis
                </Link>
              </TableCell>
              <TableCell>
                {/* <Link href={`/profile/payment/${order._id}`}>Pay</Link> */}
                {order.payment?.isPaid ? (
                  <Button
                    disabled
                    className="bg-green-700 text-white cursor-not-allowed"
                  >
                    Paid
                  </Button>
                ) : (
                  <Link href={`/profile/payment/${order._id}`}>
                    <Button>Pay</Button>
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
