"use client";
import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { array } from "prop-types";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { authContext } from "../authProvider";

interface ICreateFoodContext {
  foods: any;
  getFoods: () => void;
  uploadImage: () => void;
  handleLoading: () => void;
  deleteFood: (foodId: string) => void;
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFoodForm: (e: any) => void;
  foodForm: {
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  };
  loading: boolean;
}
export const foodContext = createContext({} as ICreateFoodContext);
const FoodProvider = ({ children }: PropsWithChildren) => {
  const { token } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [foods, setFoods] = useState<any>();
  let [foodForm, setFoodForm] = useState<any>({
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });

  const getFoods = async () => {
    try {
      setLoading(true);
      const { foods } = await axios
        .get("http://localhost:8080/food")
        .then((res) => res.data);
      setFoods(foods);
      console.log("GET FOODS SUCCESS", foods);
    } catch (error) {
      console.log("ERROR IN FOODS FUNCTION", error);
    } finally {
      setLoading(false);
    }
  };
  const handleLoading = () => {
    setLoading(true);
  };

  const createFood = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/food", {
        name: foodForm.name,
        price: foodForm.price,
        description: foodForm.description,
        image: foodForm.image,
        category: foodForm.category,
      });
      console.log("create food data", data);
      setFoods([...foods, data.food]);
    } catch (error) {
      console.log("ERROR IN FOOD FUNCTION");
    }
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
  };
  const handleFoodForm = (e: ChangeEvent<HTMLInputElement>) => {
    setFoodForm({ ...foodForm, [e.target.name]: e.target.value });
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      const image = await axios
        .post("http://localhost:8080/upload", formData)
        .then((res) => res.data);
      console.log("IMAGE URL", image.result.url);
      foodForm.image = image.result.url;
      createFood();
    } catch (error) {
      console.log("ERROR IN UPLOAD IMAGE FUNCTION");
    }
  };

  const deleteFoodFromArray = (id: string) => {
    setFoods((oldFoods: any) => {
      return oldFoods.filter((obj: any) => obj._id !== id);
    });
  };

  const deleteFood = async (foodId: string) => {
    try {
      const data = await axios.delete(`http://localhost:8080/food/${foodId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      deleteFoodFromArray(foodId);
    } catch (error) {}
  };
  return (
    <foodContext.Provider
      value={{
        foods,
        getFoods,
        uploadImage,
        handleFoodForm,
        handleFile,
        foodForm,
        deleteFood,
        loading,
        handleLoading,
      }}
    >
      {children}
    </foodContext.Provider>
  );
};

export default FoodProvider;
