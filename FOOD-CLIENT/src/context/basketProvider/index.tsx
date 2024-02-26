"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserContext } from "@/context/UserProvider";

import axios from "@/utils/axios";

interface IBasket {
  food: {
    name: string;
    _id: string;
    description: string;
    price: number;
  };
  count: number;
}

interface IBasketContext {
  loading: boolean;
  baskets: IBasket[];
  addBasket: (food: any, count: number) => Promise<void>;
  deleteBasket: (food: any) => Promise<void>;
}

export const BasketContext = createContext({} as IBasketContext);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { token, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [baskets, setBaskets] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getBaskets = async () => {
    try {
      if (token) {
        const {
          data: { basket },
        } = await axios.get("http://localhost:8080/basket", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setBaskets(basket.foods);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  const addBasket = async (food: any, count: number) => {
    try {
      setLoading(true);
      if (user) {
        const {
          data: { basket },
        } = await axios.put("http://localhost:8080/basket", {
          userId: user._id,
          foodId: food._id,
          count: count,
        });
        setLoading(false);
        setRefresh(!refresh);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  const deleteBasket = async (value: any) => {
    try {
      setLoading(true);

      if (user) {
        const {
          data: { basket },
        } = await axios.delete("http://localhost:8080/basket" + value, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLoading(false);
        setRefresh(!refresh);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  useEffect(() => {
    getBaskets();
  }, [refresh, token]);

  return (
    <BasketContext.Provider
      value={{ loading, baskets, addBasket, deleteBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
