import express from "express";
import { 
    home,
    worship, 
    members, 
    album,
    gallery, 
    conti, 
    login, 
    logout,
    profile, 
    getMusic,
    postMusic
} from "../controllers/globalController";
import { uploadFiles } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/worship", worship);
globalRouter.get("/members", members);
globalRouter.get("/album", album);
globalRouter
    .route("/music")
    .get(getMusic)
    .post(uploadFiles.single("upload") ,postMusic);
globalRouter.get("/gallery", gallery);
globalRouter.get("/conti", conti);
globalRouter.get("/login", login);
globalRouter.get("/logout", logout);
globalRouter.get("/profile", profile);

export default globalRouter;