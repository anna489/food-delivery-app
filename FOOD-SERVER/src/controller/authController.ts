import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendEmail";
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
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new Error(`${email} account isn't signup.`);
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error(`email or password is wrong`);
    }

    const token = jwt.sign({ id: user._id }, "654321" as string, {
      expiresIn: "1d",
    });
    res.status(201).send({ message: "Хэрэглэгч нэвтэрлээ", token });
    res.status(201).json({ message: "Амжилттай нэвтэрлээ", user });
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
