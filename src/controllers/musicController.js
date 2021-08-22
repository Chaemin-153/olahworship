export const uploadMusic = (req, res) => {
    return res.render("upload-music", {pageTitle:"Upload Music"});
};

export const seeMusic = (req, res) => {
    return res.render("see-music", {pageTitle:"See Music"});
};