import { sheets } from "./globalController";

export const getUploadMusic = (req, res) => {
    return res.render("upload-music", {pageTitle:"Upload Music"});
};

export const postUploadMusic = (req, res) => {
    const { title } = req.body;
    const newMusic = {
      title,
      rating: 0,
      comments: 0,
      createdAt: "just now",
      views: 0,
      id: sheets.length + 1,
  };
  console.log(newMusic);
  sheets.push(newMusic);
  return res.redirect("/music");
};

export const seeMusic = (req, res) => {
    const {id} = req.params;
    const sheet = sheets[id-1];
    return res.render("see-music", {pageTitle:`Watch ${sheet.title}`, sheet});
};