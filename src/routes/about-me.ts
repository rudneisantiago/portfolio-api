import express, { Request, Response } from "express";

const router = express.Router();

/**
 * @swagger
 * /about-me:
 *  get:
 *    summary: Retorna as informações principais da página
 *    tags:
 *      - Principal
 *    responses:
 *      200:
 *        description: Informações retornadas com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                data:
 *                  type: string
 *                  description: Texto about-me
 */
router.get("/about-me", async function (req: Request, res: Response) {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorum porro exercitationem aspernatur laboriosam accusantium explicabo ut. Accusamus, amet quae, inventore dicta eos eveniet aliquam dolorum suscipit, atque expedita veritatis.";

  res.status(200).send({ data: text });
});

export { router as aboutMeRouter };
