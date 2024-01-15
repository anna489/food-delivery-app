import express, { Application } from "express";
import color from "colors";

const app: Application = express();

app.listen(8008, () => console.log(color.red("Server is listening")));
