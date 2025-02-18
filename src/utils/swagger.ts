import { Express, Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.6.2/swagger-ui.min.css";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentação da minha API pessoal de portfolio",
      version: "1.0.0",
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["src/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app: Express) {
  app.use("/docs", serve, setup(swaggerSpec, { customCssUrl: CSS_URL }));

  app.get("/docs.json", (_: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log("Docs available at /docs");
}

export { swaggerDocs };
