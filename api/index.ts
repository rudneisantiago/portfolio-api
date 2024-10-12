import { app } from "./app";

const start = () => {
  app.listen(8000, () => console.log("Server ready on port 8000"));
};

start();

export default app;
