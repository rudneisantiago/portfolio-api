import express from "express";
import { currentUser } from "../../middlewares/current-user";

const router = express.Router();

router.get("/users/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
