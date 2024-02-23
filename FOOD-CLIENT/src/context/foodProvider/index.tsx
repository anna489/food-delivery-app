"use client";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

interface ICreateFoodContext {
  getFoods: () => void;
  foods: any;
}

export const foodContext = createContext<ICreateFoodContext>({
  getFoods: () => {},
  foods: [],
});

const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState<any>([]);

  const getFoods = async () => {
    try {
      const {
        data: { foods },
      } = await axios.get("http://localhost:8080/food").then((res) => res.data);
      setFoods(foods);
      console.log("GET FOODS SUCCESS", foods);
    } catch (error) {
      console.log("ERROR IN FOODS FUNCTION", error);
    }
  };

  return (
    <foodContext.Provider
      value={{
        getFoods,
        foods,
      }}
    >
      {children}
    </foodContext.Provider>
  );
};
export default FoodProvider;
