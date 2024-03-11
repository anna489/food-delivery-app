import { Request, Response, NextFunction } from "express";
import color from "colors";
import User from "../model/user";
import MyError from "../utils/myError";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(color.bgWhite(`REQUESTIIN BODY ${req.body}`));
    const { userId, orderInfo } = req.body;
    const user = await User.findById(userId);
    user?.orders.push(orderInfo);
    await user?.save();
    res.status(201).json({ message: "Successfully created order" });
  } catch (error) {
    next(error);
  }
};
