import express, { Request, Response } from "express";

const router = express.Router();

router.get("/about-me", async function (req: Request, res: Response) {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorum porro exercitationem aspernatur laboriosam accusantium explicabo ut. Accusamus, amet quae, inventore dicta eos eveniet aliquam dolorum suscipit, atque expedita veritatis.";

  await sleep(5000);
  res.status(200).send({ data: text });
});

const sleep = async (ms: number) => new Promise((res) => setTimeout(res, ms));

export { router as aboutMe };
