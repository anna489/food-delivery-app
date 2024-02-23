"use client";
import axios from "axios";
import React, { PropsWithChildren, createContext, useState } from "react";

interface ICreateCatContext {
  categories: any;
  getCategories: () => void;
}
interface ICategory {
  _id: string;
  name: string;
  description: string;
}
export const catContext = createContext<ICreateCatContext>({
  categories: [],
  getCategories: () => {},
});

const CatProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<any>([]);

  const getCategories = async () => {
    try {
      const { categories } = await axios
        .get("http://localhost:8080/category")
        .then((res) => res.data);
      setCategories(categories);
      console.log("GET CATEGORIES SUCCESS", categories);
    } catch (error) {
      console.log("ERROR IN GETCATEGORIES FUNCTION", error);
    }
  };
  return (
    <catContext.Provider value={{ getCategories, categories }}>
      {children}
    </catContext.Provider>
  );
};
export default CatProvider;
