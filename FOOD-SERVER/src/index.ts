import express, { Application, Request, Response } from "express";
import color from "colors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db";
import authRoute from "./router/authRoute";
import userRoute from "./router/userRoute";
import verifyRoute from "./router/verifyRoute";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();

connectDB(MONGO_URI);

// app.get("404", (req, res) => {
//   res.send("djfu");
// });

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/verify", verifyRoute);

app.listen(PORT, () => console.log(color.rainbow("Server is running " + PORT)));
