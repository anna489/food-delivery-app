import { Request, Response } from "express";
import User from "../model/user";
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

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: `${email}-тэй хэрэглэгч байхгүй байна` });
    }

    res.status(201).json({ message: "Амжилттай нэвтэрлээ", user });
  } catch (error) {
    res.status(400).json({ message: "Хэрэглэгч олдсонгүй", error });
  }
};
