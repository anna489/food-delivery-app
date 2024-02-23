// "use client";
// import axios from "axios";
// import React, { PropsWithChildren, createContext, useState } from "react";

// interface ICreateUserContext {
//   getCustomers: () => void;
//   customers: any;
// }
// export const userContext = createContext<ICreateUserContext>({
//   getCustomers: () => {},
//   customers: {},
// });

// const UserProvider = ({ children }: PropsWithChildren) => {
//   const [customers, setCustomers] = useState([]);
//   const getCustomers = async () => {
//     try {
//       const data = await axios
//         .get("http://localhost:8080/user")
//         .then((res) => res.data);
//       setCustomers(data.users);
//     } catch (error) {
//       console.log("Error in getUsers FUNCTION!", error);
//     }
//   };
//   return (
//     <userContext.Provider value={{ getCustomers, customers }}>
//       {children}
//     </userContext.Provider>
//   );
// };

// export default UserProvider;
"use client";
import React, {
  ChangeEvent,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";

interface IUsers {
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
  avatarUrl: string;
  status: string;
}

interface IUserContext {
  users: IUsers[];
  loading: boolean;
  createUser: () => Promise<void>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const createUser = async () => {
    try {
      setLoading(true);
      const data = (await axios.post("/auth/signup", {
        name: newUser.name,
        email: newUser.email,
        address: newUser.address,
        password: newUser.password,
      })) as {
        data: object;
      };
      setRefresh(!refresh);
      toast.success("Amjilttai burtgelee");
    } catch (error: any) {
      toast.error("Error creating the user" + error.message);
    } finally {
      setLoading(false);
    }
  };

  const getAllUser = async () => {
    try {
      const {
        data: { users },
      } = await axios.get("/api/users");
      console.log("All Users", users);
      setUsers(users);
    } catch (error) {
      toast.warning("Хэрэглэгчдийн мэдээллийг авахад алдаа гарлаа.");
    }
  };

  useEffect(() => {
    getAllUser();
  }, [refresh]);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        handleChange,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
