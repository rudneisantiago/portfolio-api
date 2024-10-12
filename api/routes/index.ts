import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Adaptando pra publicação na vercel");
});

export { router as indexRouter };
