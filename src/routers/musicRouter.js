import express from "express";
import { getUploadMusic, postUploadMusic, seeMusic } from "../controllers/musicController";

const musicRouter = express.Router();

musicRouter.route("/upload").get(getUploadMusic).post(postUploadMusic);
musicRouter.get("/:id", seeMusic);

export default musicRouter;