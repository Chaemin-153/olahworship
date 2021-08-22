import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import galleryRouter from "./routers/galleryRouter";
import contiRouter from "./routers/contiRouter";
import membersRouter from "./routers/membersRouter";
import musicRouter from "./routers/musicRouter";
import profileRouter from "./routers/profileRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/static", express.static("assets"));

app.use("/", globalRouter);
app.use("/members", membersRouter);
app.use("/gallery", galleryRouter);
app.use("/conti", contiRouter);
app.use("/music", musicRouter);
app.use("/profile", profileRouter);

export default app;