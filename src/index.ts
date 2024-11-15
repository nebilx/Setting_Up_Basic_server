import express, { Express } from "express";
import index from "./routes";
const app: Express = express();

const port: number = 5000;

app.use(express.json());

app.use("/api", index);

app.listen(port, (): void => {
  console.log(`server is running in port http://localhost:${port}`);
});
