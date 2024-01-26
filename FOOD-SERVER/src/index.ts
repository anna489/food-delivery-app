import express, { Application, Request, Response } from "express";
import color from "colors";
import { connectDB } from "./config/db";
import cors from "cors";
import dotenv from "dotenv";
import UserRouer from "./router/authRouter";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();
connectDB(MONGO_URI);

app.use(express.json());
app.use(cors());
app.use("/auth", UserRouer);

app.listen(8080, () => console.log(color.green("Server is running")));
