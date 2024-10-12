import { app } from "./src/app";

const start = () => {
  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
};

start();
