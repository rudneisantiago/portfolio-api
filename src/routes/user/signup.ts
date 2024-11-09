import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { User } from "../../models/User";
import { BadRequestError } from "../../errors";
import { validateRequest } from "../../middlewares";

const router = express.Router();

router.post(
  "/users/signup",
  [
    body("username").trim().notEmpty().withMessage("Username must be supply"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      throw new BadRequestError("User already in use");
    }

    const user = User.build({
      username,
      password,
    });

    await user.save();

    const jwtUser = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: jwtUser,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
