import { NextFunction, Response } from "express";
import Basket from "../model/basket";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";

export const addToBasketByUserId = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("USER", req.user);
  console.log("BODY", req.body);
  try {
    const findBasket = await Basket.findOne({ user: req.user._id });

    if (!findBasket) {
      const basket = await (
        await Basket.create({
          user: req.user._id,
          foods: [
            {
              food: req.body.foodId,
              qty: req.body.quantity,
            },
          ],
          totalPrice: req.body.totalPrice,
        })
      ).populate("foods.food");
      res.status(200).json({ message: "Хоол амжилттай нэмлээ-1", basket });
    } else {
      console.log("BFOODS", findBasket);
      const findIndex = findBasket.foods.findIndex(
        (el) => el.food.toString() === req.body.foodId
      );
      console.log("FIND", findIndex);

      if (findIndex !== -1) {
        findBasket.foods[findIndex].count = Number(req.body.count);
        findBasket.totalPrice = Number(req.body.totalPrice);
      } else {
        //Body { foodId: '65c09a9540441dead6a530e2', quantity: 2, totalPrice: 4000 }
        findBasket.foods.push({
          food: req.body.foodId,
          count: req.body.count,
        });
        findBasket.totalPrice =
          Number(req.body.totalPrice) + findBasket.totalPrice!;
        console.log("ID", req.body.foodId);
        console.log("COUNT", req.body.count);
        console.log("TP", req.body.totalPrice);
      }

      const savedBasket = await (
        await findBasket.save()
      ).populate("foods.food");

      console.log("ChangedFoods", savedBasket);

      res.status(200).json({
        message: "Хоол амжилттай нэмлээ-2",
        basket: {
          id: savedBasket._id,
          foods: savedBasket.foods,
          totalPrice: findBasket.totalPrice,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getFromBasketByUser = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("User", req.user);
  try {
    const findBasket = await Basket.findOne({ user: req.user._id }).populate(
      "foods.food"
    );

    if (!findBasket) {
      throw new MyError("Сагсны мэдээлэл олдсонгүй", 400);
    }

    res.status(200).json({
      message: "Хоолны мэдээлэл",
      basket: {
        id: findBasket._id,
        foods: findBasket.foods,
        totalPrice: findBasket.totalPrice,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteFromBasketByUser = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const { foodId } = req.params;
  const { user } = req;

  try {
    const findBasket = await Basket.findOne({ user: user._id }).populate(
      "foods.food"
    );
    if (!findBasket) {
      throw new MyError("Сагсны мэдээлэл олдсонгүй", 400);
    }

    const findIndex = findBasket.foods.findIndex(
      (el) => el.food._id.toString() == foodId
    );

    if (findIndex !== -1) {
      findBasket.foods.splice(findIndex, 1);
    }
    const savedBasket = await (await findBasket.save()).populate("foods.food");
    console.log("SAVED", savedBasket);
    res.status(200).json({
      message: "Хоолыг сагснаас хаслаа.",
      basket: {
        id: savedBasket._id,
        foods: savedBasket.foods,
        totalPrice: savedBasket.totalPrice,
      },
    });
  } catch (error) {
    next(error);
  }
};
