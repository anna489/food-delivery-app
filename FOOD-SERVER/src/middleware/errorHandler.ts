import { Response, Request, NextFunction } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Responce,
  next: NextFunction
) => {
  console.log("err midd====>", err.stack?.red.underline);
  res.status(500).josn({ message: err.message || "internal server error" });
};

export default errorHandler;
