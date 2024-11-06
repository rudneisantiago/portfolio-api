import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send({ message: "Adaptando para publicação na vercel" });
});

export { router as indexRouter };
export * from "./about-me";
export * from "./user";
