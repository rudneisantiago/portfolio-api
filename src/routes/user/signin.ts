import express, { Request, Response } from "express";
// import { body } from "express-validator";
import { User } from "../../models/User";
import { Password } from "../../services/password";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../../errors";

const router = express.Router();

router.post(
  "/users/signin",
  //   [
  //     body("email").isEmail().withMessage("Email must be valid"),
  //     body("password").trim().notEmpty().withMessage("You must suppy a password"),
  //   ],
  //   validateRequest,
  async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      throw new BadRequestError("Invalid credentials");
    }

    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );

    if (!passwordsMatch) {
      throw new BadRequestError("Invalid credentials");
    }

    const userJwt = jwt.sign(
      { id: existingUser.id, username: existingUser.username },
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(existingUser);
  }
);

export { router as signinRouter };
