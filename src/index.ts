import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import { indexController } from "./controllers/controllers";
import morgan from "morgan";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app: Express = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", indexController);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
