"use client";
import { useGetAllOrders } from "@/hooks/checkout.hook";
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
  const { data } = useGetAllOrders();
  const orders: TOrder[] = data?.data || [];
  console.log(orders);
  return (
    <div>
      <h1>This is orders page</h1>

      {/* user table */}
      <Table aria-label="Example static collection table mb-5">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Email</TableColumn>

          <TableColumn>Mobile No</TableColumn>

          <TableColumn>Details</TableColumn>
          <TableColumn>Pay</TableColumn>
        </TableHeader>
        <TableBody>
          {orders?.map((order: any) => (
            <TableRow key={order._id}>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.email}</TableCell>

              <TableCell>{order.mobileNo}</TableCell>

              <TableCell>
                <Link href={`/admin/manageUser/userList/${order._id}`}>
                  view detalis
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/profile/payment/${order._id}`}>Pay</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
