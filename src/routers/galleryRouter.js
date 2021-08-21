import express from "express";
import { pictures, videos } from "../controllers/galleryController";

const galleryRouter = express.Router();

galleryRouter.get("/videos", videos);
galleryRouter.get("/pictures", pictures);

export default galleryRouter;