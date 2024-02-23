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
  isLoading: boolean;
  getFoods: () => void;
  uploadImage: () => void;
  deleteFood: (foodId: string) => void;
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFoodForm: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const foodContext = createContext<ICreateFoodContext>({
  getFoods: () => {},
  handleFile: () => {},
  handleFoodForm: () => {},
  uploadImage: () => {},
  deleteFood: (catId: string) => {},
  foods: [],
  isLoading: false,
});

const FoodProvider = ({ children }: PropsWithChildren) => {
  const { token } = useContext(authContext);
  const [isLoading, setIsLoading] = useState(false);

  const [foods, setFoods] = useState<any>();
  const [foodForm, setFoodForm] = useState<any>({
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });

  const getFoods = async () => {
    try {
      setIsLoading(true);
      const { foods } = await axios
        .get("http://localhost:8080/food")
        .then((res) => res.data);
      setFoods(foods);
      console.log("GET FOODS SUCCESS", foods);
    } catch (error) {
      console.log("ERROR IN FOODS FUNCTION", error);
    } finally {
      setIsLoading(false);
    }
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

  const [file, setFile] = useState<File | null>(null);
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
      console.log("ERROR IN UPLOAD IMAGE FUNCTION", error);
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
        isLoading,
        deleteFood,
      }}
    >
      {children}
    </foodContext.Provider>
  );
};

export default FoodProvider;
