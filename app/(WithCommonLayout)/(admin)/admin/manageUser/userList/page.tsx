// import { getAllUser } from "@/services/User";
import UserTable from "./userTable";

export default async function UserList() {
  // const data = await getAllUser();

  // const users = data?.data || [];

  return (
    <div>
      {/* <h1>this is user list page</h1> */}
      {/* create user */}

      {/* users list and delete,uodate. */}
      <UserTable />
      <div>
        {/* passing all users at a time */}
        {/* <UserTable users={users} /> */}
      </div>
      {/* <div>
        {data?.data?.map((user: any) => (
          <ManageUser key={user.id} user={user} />
        ))}
      </div> */}
    </div>
  );
}
