export const videos = (req, res) => {
    return res.render("videos", {pageTitle:"Videos"});
};

export const pictures = (req, res) => {
    return res.render("pictures", {pageTitle:"Pictures"});
};