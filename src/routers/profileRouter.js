import express from "express";
import { editProfile } from "../controllers/profileController";

const profileRouter = express.Router();

profileRouter.get("/edit", editProfile);

export default profileRouter;