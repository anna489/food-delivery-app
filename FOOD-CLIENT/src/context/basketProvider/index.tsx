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
    id: string;
  };
  totalPrice: number;
  count: number;
}

interface IBasketContext {
  loading: boolean;
  baskets: IBasket[];
  addBasket: (food: any, count: number) => Promise<void>;
  deleteBasket: (food: any) => Promise<void>;
  totalPrice: number;
}

export const BasketContext = createContext({} as IBasketContext);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { token, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [baskets, setBaskets] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [drawerFood, setDrawerFood] = useState<any>([]);
  const [basketFoods, setBasketFoods] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (basketFoods) {
      setTotalPrice(
        basketFoods
          ?.map((food: any) => {
            return food.food.price * food.count;
          })
          .reduce((sum: number, cur: number) => {
            return sum + cur;
          }, 0)
      );
    }
  }, [basketFoods]);

  const getBaskets = async () => {
    try {
      console.log("TOKEN IN BASKET:", token);

      const {
        data: { basket },
      } = await axios.get("http://localhost:8080/basket", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBaskets(basket.foods);
      console.log("GET BASKET SUCCESS");
    } catch (error: any) {
      console.log("ERROR IN GETBATKET FUNCTION", error);
    }
  };

  const addBasket = async (food: any, count: number) => {
    try {
      setLoading(true);
      if (user) {
        console.log("user in addbasket", user);
        const {
          data: { basket },
        } = await axios.post(
          "http://localhost:8080/basket",
          {
            foodId: food._id,
            count: count,
            totalPrice: food.price * count,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setLoading(false);
        setRefresh(!refresh);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  const deleteFoodFromArray = (id: string) => {
    setDrawerFood((oldFoods: any) => {
      return oldFoods.filter((obj: any) => obj._id !== id);
    });
  };

  const deleteBasket = async (id: any) => {
    try {
      setLoading(true);

      if (user) {
        const {
          data: { basket },
        } = await axios.delete(`http://localhost:8080/basket/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLoading(false);
        deleteFoodFromArray(id);
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
      value={{ loading, baskets, addBasket, deleteBasket, totalPrice }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
