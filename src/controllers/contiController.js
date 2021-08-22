export const uploadConti = (req, res) => {
    return res.render("upload-conti", {pageTitle:"Upload Conti"});
};

export const seeConti = (req, res) => {
    return res.render("see-conti", {pageTitle:"See Conti"});
};