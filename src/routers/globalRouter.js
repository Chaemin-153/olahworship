import express from "express";
import { 
    home,
    worship, 
    members, 
    album, 
    music, 
    gallery, 
    conti, 
    login, 
    logout,
    profile 
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/worship", worship);
globalRouter.get("/members", members);
globalRouter.get("/album", album);
globalRouter.get("/music", music);
globalRouter.get("/gallery", gallery);
globalRouter.get("/conti", conti);
globalRouter.get("/login", login);
globalRouter.get("/logout", logout);
globalRouter.get("/profile", profile);

export default globalRouter;