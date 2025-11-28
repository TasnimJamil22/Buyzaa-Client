export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const { data: user } = await getASingleUser(userId);

  return (
    <Container>
      <div className="mx-auto">
        <UserDetail key={user?._id} user={user} />
      </div>
    </Container>
  );
}

// "use server";
// import Container from "@/components/UI/Container";
// import UserDetail from "@/components/UI/User/UserDetail";
// import { getASingleUser } from "@/services/User";

// interface PageProps {
//   searchParams: Promise<{
//     [key: string]: string;
//   }>;
// }
// const UserDetailsPage = async ({ searchParams }: PageProps) => {
//   const resolvedSearchParams = await searchParams;
//   const { userId } = resolvedSearchParams;
//   const { data: user } = await getASingleUser(userId);

//   console.log(user);

//   return (
//     <Container>
//       <div className="mx-auto  ">
//         <UserDetail key={user?._id} user={user} />
//       </div>
//     </Container>
//   );
// };

// export default UserDetailsPage;
//

// "use server";
// import Container from "@/components/UI/Container";
// import UserDetail from "@/components/UI/User/UserDetail";
// import { getASingleUser } from "@/services/User";

import Container from "@/components/UI/Container";
import UserDetail from "@/components/UI/User/UserDetail";
import { getASingleUser } from "@/services/User";

// interface IProps {
//   params: {
//     userId: string;
//   };
// }
// const UserDetailsPage = async ({ params: { userId } }: IProps) => {
//   const { data: user } = await getASingleUser(userId);

//   console.log(user);

//   return (
//     <Container>
//       <div className="mx-auto  ">
//         <UserDetail key={user?._id} user={user} />
//       </div>
//     </Container>
//   );
// };

// export default UserDetailsPage;
//
