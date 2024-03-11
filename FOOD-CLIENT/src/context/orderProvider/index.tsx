"use client";
import axios from "axios";
import {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
// import { authContext } from "../authProvider";
import { BasketContext } from "../basketProvider";
import { UserContext } from "../UserProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

interface ICreateOrderContext {
  createOrder: (
    duureg: string,
    horoo: string,
    buildingNo: string,
    info: string,
    phoneNumber: string,
    method: string
  ) => void;
}
export const orderContext = createContext({} as ICreateOrderContext);

const OrderProvider = ({ children }: PropsWithChildren) => {
  const { baskets, totalPrice } = useContext(BasketContext);
  const [loading, setLoading] = useState(false);
  const orderInfo = {
    orderId: "#" + Math.floor(Math.random() * 10000),
    foods: baskets,
    payment: {
      paymentAmount: totalPrice,
      method: "",
    },
    address: {
      khoroo: "",
      duureg: "",
      buildingNo: "",
      info: "",
    },
    phoneNumber: "",
  };

  const { token, user } = useContext(UserContext);
  console.log("USER======>", user);
  const createOrder = async (
    duureg: string,
    horoo: string,
    buildingNo: string,
    info: string,
    phoneNumber: string,
    method: string
  ) => {
    try {
      setLoading(true);
      orderInfo.address.duureg = duureg;
      orderInfo.address.khoroo = horoo;
      orderInfo.address.buildingNo = buildingNo;
      orderInfo.address.info = info;
      orderInfo.payment.method = method;
      orderInfo.phoneNumber = phoneNumber;

      const data = await axios.post(
        "http://localhost:8080/order/new",
        {
          userId: user._id,
          orderInfo: orderInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await Swal.fire({
        position: "top-right",
        title: "Та амжилттай захиалга хийлээ",
        icon: "success",
        timer: 5000,
        showConfirmButton: false,
      });
    } catch (error) {
      toast.error(" Захиалга хийхэд тань алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  return (
    <orderContext.Provider value={{ createOrder }}>
      {children}
    </orderContext.Provider>
  );
};
export default OrderProvider;
