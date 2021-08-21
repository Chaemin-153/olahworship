import express from "express";
import { seeMusic, uploadMusic } from "../controllers/musicController";

const musicRouter = express.Router();

musicRouter.get("/upload", uploadMusic);
musicRouter.get("/see/:id", seeMusic);

export default musicRouter;