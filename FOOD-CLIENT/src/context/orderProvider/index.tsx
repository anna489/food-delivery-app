"use client";
import axios from "axios";
import {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { authContext } from "../authProvider";
import { BasketContext } from "../basketProvider";

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
  let orderInfo = {
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

  const { token, user } = useContext(authContext);
  const createOrder = async (
    duureg: string,
    horoo: string,
    buildingNo: string,
    info: string,
    phoneNumber: string,
    method: string
  ) => {
    orderInfo.address.duureg = duureg;
    orderInfo.address.khoroo = horoo;
    orderInfo.address.buildingNo = buildingNo;
    orderInfo.address.info = info;
    orderInfo.payment.method = method;
    orderInfo.phoneNumber = phoneNumber;
    console.log("CREATE ORDER", orderInfo);
    console.log("TOKEN", token);
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
  };
  return (
    <orderContext.Provider value={{ createOrder }}>
      {children}
    </orderContext.Provider>
  );
};
export default OrderProvider;
