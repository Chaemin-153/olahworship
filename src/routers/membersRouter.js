import express from "express";
import { member } from "../controllers/membersController";

const membersRouter = express.Router();

membersRouter.get("/member", member);

export default membersRouter;