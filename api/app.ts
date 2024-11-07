import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { errorHandler } from "../src/middlewares/error-handler";
import { NotFoundError } from "../src/errors";

import {
  aboutMeRouter,
  indexRouter,
  signupRouter,
  signinRouter,
  currentUserRouter,
  signoutRouter,
} from "../src/routes";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use([
  indexRouter,
  aboutMeRouter,
  signupRouter,
  currentUserRouter,
  signinRouter,
  signoutRouter,
]);

app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
