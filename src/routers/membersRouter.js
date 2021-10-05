import express from "express";
import { chaemin, hannah, mihee } from "../controllers/membersController";

const membersRouter = express.Router();

membersRouter.get("/mihee", mihee);
membersRouter.get("/chaemin", chaemin);
membersRouter.get("/hannah", hannah);

export default membersRouter;
