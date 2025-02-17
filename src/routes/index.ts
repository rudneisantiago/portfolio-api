import express from "express";

const router = express.Router();

/**
 * @swagger
 * /:
 *  get:
 *    summary: Rota para teste de publicação
 *    tags:
 *      - Check route
 *    responses:
 *      200:
 *        description: Mensagem informando que a publicação foi um sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Texto about-me
 */
router.get("/", async (req, res) => {
  res.status(200).send({ message: "Adaptando para publicação na vercel" });
});

export { router as indexRouter };
export * from "./about-me";
export * from "./user";
