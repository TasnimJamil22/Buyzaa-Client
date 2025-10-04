import Container from "@/components/UI/Container";
import UserDetail from "@/components/UI/User/UserDetail";

import { getASingleUser } from "@/services/User";

interface IProps {
  params: {
    userId: string;
  };
}
const UserDetailsPage = async ({ params: { userId } }: IProps) => {
  const { data: user } = await getASingleUser(userId);
  console.log(user);
  return (
    <Container>
      <div className="mx-auto  ">
        <UserDetail key={user?._id} user={user} />
      </div>
    </Container>
  );
};
export default UserDetailsPage;
