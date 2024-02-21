import { NextFunction, Request, Response } from "express";
import cloudinary from "../utils/cloudinary";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("file", req.file);
    const result = await cloudinary.uploader.upload(req.file?.path!);
    res.status(200).json({ message: "Image ok", result });
  } catch (error) {
    next(error);
  }
};
