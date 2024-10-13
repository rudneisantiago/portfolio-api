import express from "express";
import { aboutMe, indexRouter } from "./routes";

const app = express();

app.use([indexRouter, aboutMe]);

export { app };
