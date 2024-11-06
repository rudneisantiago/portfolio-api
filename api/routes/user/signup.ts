import express, { Request, Response } from "express";
import { User } from "../../models/User";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../../errors";

const router = express.Router();

router.post("/users/signup", async (req: Request, res: Response) => {
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
});

export { router as signupRouter };
