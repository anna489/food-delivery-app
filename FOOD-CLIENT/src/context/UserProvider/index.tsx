"use client";
import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import MyAxios from "@/utils/axios";
import Swal from "sweetalert2";
import { Flag } from "@mui/icons-material";
import axios from "axios";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
}

interface IUserContext {
  userForm: IUser | null;
  user: any;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    name: string,
    password: string,
    email: string,
    address: string
  ) => Promise<void>;
  logout: () => void;
  loading: boolean;
  token: string | null;
  createOrder: (basket: any, address: any) => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [userForm, setUserForm] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const handleNext = () => {
    router.replace("/");
  };
  const handleGoLogin = () => {
    router.replace("/login");
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const {
        data: { token, user },
      } = await MyAxios.post("/auth/login", {
        userEmail: email,
        userPassword: password,
      });
      console.log("newterlee", token, user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Амжилттай нэвтэрлээ",
        showConfirmButton: false,
        timer: 1500,
      });
      handleNext();
    } catch (error) {
      toast.error("Нэвтэрхэд алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
    if (storedToken) {
      try {
        setToken(storedToken);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
    address: string
  ) => {
    try {
      setLoading(true);
      const data = await MyAxios.post("/auth/signup", {
        name: name,
        email: email,
        address: address,
        password: password,
      });

      await Swal.fire({
        position: "top-end",
        title: "Та амжилттай бүртгүүллээ",
        text: "E-mail хаягруу баталгаажуулах линк явууллаа",
        icon: "success",
        timer: 5000,
        showConfirmButton: false,
      });

      handleGoLogin();
    } catch (error) {
      toast.error("Бүртгүүлэхэд алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async (basket: any, address: any) => {
    console.log("food", basket);

    try {
      await axios.post(
        "http://localhost:8080/order",
        {
          address,
          basket,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
      toast.error("Захиалга үүсгэхэд алдаа гарлаа");
    }
  };

  return (
    <UserContext.Provider
      value={{
        logout,
        login,
        signup,
        userForm,
        loading,
        user,
        token,
        createOrder,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
