import express, { Application, Request, Response } from "express";
import color from "colors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db";
import authRoute from "./router/authRoute";
import userRoute from "./router/userRoute";
import verifyRoute from "./router/verifyRoute";
import errorHandler from "./middleware/errorHandler";
import categoryRoute from "./router/categoryRoute";
import foodRoute from "./router/foodRoute";
import uploadRoute from "./router/uploadRoute";
import basket from "./router/basketRoute";
import orderRoute from "./router/orderRoute";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/verify", verifyRoute);
app.use("/category", categoryRoute);
app.use("/food", foodRoute);
app.use("/upload", uploadRoute);
app.use("/basket", basket);
app.use("/order", orderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>FOod delivery</h1>");
});
app.use(errorHandler);

app.listen(PORT, () => console.log(color.rainbow("Server is running " + PORT)));
