import express from "express";
import {
	deleteMusic,
	getEditMusic,
	getUploadMusic,
	postEditMusic,
	postUploadMusic,
	searchMusic,
	seeMusic,
} from "../controllers/musicController";

const musicRouter = express.Router();

musicRouter.get("/:id([0-9a-f]{24})", seeMusic);
musicRouter.route("/upload").get(getUploadMusic).post(postUploadMusic);
musicRouter
	.route("/:id([0-9a-f]{24})/edit")
	.get(getEditMusic)
	.post(postEditMusic);
musicRouter.route("/:id([0-9a-f]{24})/delete").get(deleteMusic);
musicRouter.route("/search").get(searchMusic);

export default musicRouter;
