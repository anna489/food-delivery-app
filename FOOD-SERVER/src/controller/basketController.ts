import { NextFunction, Request, Response } from "express";
import Basket from "../model/basket";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";

export const createBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newBasket = req.body;
    console.log("NEW BASKET===>", newBasket);
    await Basket.create(newBasket);
    res.status(201).json({ message: "Basket created successfully" });
  } catch (error) {
    next(error);
  }
};
export const getBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const basket = await Basket.findOne({
      user: req.user._id,
    }).populate("foods.food");
    console.log("REQ.USER_ID====>", req.user._id);
    console.log("BASKET====>", basket);
    if (!basket) {
      throw new MyError(
        `Cannot found ${req.user._id} ==> id from basket `,
        400
      );
    }
    res
      .status(200)
      .json({ message: `Found this ${req.user._id} ==> from basket `, basket });
  } catch (error) {
    next(error);
  }
};

export const updateBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, foodId, count } = req.body;
    const basket = await Basket.findOne({ user: userId });
    console.log("UPDATA BASKET USERID===>", userId);
    basket?.foods.push({ food: foodId, count: count });
    await basket?.save();
    res.status(200).json({ message: "successfully updated basket" });
  } catch (error) {
    next(error);
  }
};

export const deleteBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    console.log("FOOD.ID===>", foodId);
    console.log("USER.ID===>", req.user._id);
    const basket = await Basket.findOne({ user: req.user._id });
    const findIndex = basket?.foods.findIndex((e) =>
      e.food?._id.equals(foodId)
    );
    console.log("FONDINDEX", findIndex);

    if (findIndex !== undefined) basket?.foods.splice(findIndex, 1);

    await basket?.save();
    res
      .status(200)
      .json({ message: `Deleted this ${foodId}-id food on basket` });
  } catch (error) {
    next(error);
  }
};
