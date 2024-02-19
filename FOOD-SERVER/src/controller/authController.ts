import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendEmail";
import MyError from "../utils/myError";
// import { compareSync } from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, avatarUrl, address } = req.body;

    const newUser = {
      name: name,
      email: email,
      password: password,
      avatarUrl: avatarUrl,
      address: address,
    };

    const user = await User.create(newUser);

    res.status(201).json({ message: "New user created", user });
  } catch (error) {
    res.status(400).json({ message: " Can't create new user !", error });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userEmail, userPassword } = req.body;
    console.log("LOGIN", userEmail);

    const user = await User.findOne({ email: userEmail })
      .select("+password")
      .lean();

    if (!user) {
      throw new MyError(`${userEmail}-тэй хэрэглэгч бүртгэлгүй байна.`, 400);
    }

    const isValid = await bcrypt.compare(userPassword, user.password);

    if (!isValid) {
      throw new MyError(`Имэйл эсвэл нууц үг буруу байна.`, 400);
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRE_IN }
    );

    const { password, ...otherParams } = user;

    res.status(201).json({
      message: "Хэрэглэгч амжилттай нэвтэрлээ",
      token,
      user: otherParams,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyAccount = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await sendEmail(email, "verify acc for food platform");
    res.status(201).json({ message: "Амжилттай нэвтэрлээ" });
  } catch (error) {
    res.status(400).json({
      message: "email aldaa garla",
      error,
    });
  }
};
