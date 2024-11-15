import express, { Router, Request, Response } from "express";

const index: Router = express.Router();

index.get("/", (_req: Request, res: Response): void => {
  res
    .status(200)
    .json(
      "use this api routes to check it put \n /api/name \n /api/hobby \n /api/dream"
    );
});

index.get("/name", (_req: express.Request, res: express.Response): void => {
  res.status(200).send("Nebil Abdurahman");
});

index.get("/hobby", (_req: Request, res: Response): void => {
  res.status(200).json("working on detailed Project");
});
index.get("/dream", (_req: express.Request, res: express.Response): void => {
  res.status(200).send("Life is Short");
});

export default index;
