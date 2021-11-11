import express from "express";
import {
	getEditMusic,
	getUploadMusic,
	postEditMusic,
	postUploadMusic,
	seeMusic,
} from "../controllers/musicController";

const musicRouter = express.Router();

musicRouter.get("/:id([0-9a-f]{24})", seeMusic);
musicRouter.route("/upload").get(getUploadMusic).post(postUploadMusic);
musicRouter
	.route("/:id([0-9a-f]{24})/edit")
	.get(getEditMusic)
	.post(postEditMusic);

export default musicRouter;
