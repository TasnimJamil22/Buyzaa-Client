"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCurrentUser } from "@/services/AuthService";
import { TUser } from "@/types";

//✅ Step 1: Creating the context
const UserContext = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

//2.make a provider
const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  //   Fetching the current user
  const handleUser = async () => {
    const user = await getCurrentUser();

    setUser(user as TUser);
    setIsLoading(false);
  };

  //   Fetches user info on first render
  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    //2.making provider
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

//now its time to consume the user provider and we can make a hook(useUser).which is generally used in this place
export const useUser = () => {
  //3.using or consuming user= the UserContext to get the user data
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};

//4. wrap childrens in <UserProvider> in providers -> index.ts
export default UserProvider;
