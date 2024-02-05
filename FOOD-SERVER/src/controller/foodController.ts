import { NextFunction, Request, Response } from "express";
import Category from "../model/category";
import MyError from "../utils/myError";
import Food from "../model/food";

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newFood = req.body;
    await Food.create(newFood);
    res.status(201).json({ message: "created Food successfully" });
  } catch (error) {
    next(error);
  }
};
export const getFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const findFood = await Food.findById(foodId);
    if (!findFood) {
      throw new MyError(`${foodId}-hereglegch alga`, 400);
    }
    res.status(200).json({ message: `${foodId}-found this  food `, findFood });
  } catch (error) {
    next(error);
  }
};
export const getAllFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { findFood } = req.params;
    const foods = await Food.find().populate("category");

    res.status(200).json({ message: `${findFood}-found all  foods `, foods });
  } catch (error) {
    next(error);
  }
};
export const updateFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const updateFood = req.body;
    const food = await Food.findByIdAndUpdate(categoryId, updateFood);
    if (!food) {
      throw new MyError(`${categoryId}-hereglegch alga`, 400);
    }
    res.status(200).json({ message: `${categoryId}-found this  food `, food });
  } catch (error) {
    next(error);
  }
};
export const deleteFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const deleteFood = await Food.findByIdAndDelete(foodId);
    if (!deleteFood) {
      throw new MyError(`${foodId}-hereglegch alga`, 400);
    }
    res.status(200).json({
      message: `${foodId}-deleted this  food `,
      deleteFood,
    });
  } catch (error) {
    next(error);
  }
};
