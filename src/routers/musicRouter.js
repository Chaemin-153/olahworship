import express from "express";
import {
	getUploadMusic,
	postUploadMusic,
	seeMusic,
} from "../controllers/musicController";

const musicRouter = express.Router();

musicRouter.get("/:id([0-9a-f]{24})", seeMusic);
musicRouter.route("/upload").get(getUploadMusic).post(postUploadMusic);

export default musicRouter;
