import express from "express";
import { seeConti, uploadConti } from "../controllers/contiController";

const contiRouter = express.Router();

contiRouter.get("/upload", uploadConti);
contiRouter.get("/see/:id", seeConti);

export default contiRouter;