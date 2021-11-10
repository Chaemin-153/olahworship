import Sheet from "../models/Sheet";

export const home = (req, res) => {
	return res.render("home", { pageTitle: "Home" });
};

export const worship = (req, res) => {
	return res.render("worship", { pageTitle: "Worship" });
};

export const members = (req, res) => {
	return res.render("members", { pageTitle: "Members" });
};

export const album = (req, res) => {
	return res.render("album", { pageTitle: "Album" });
};

export const getMusic = async (req, res) => {
	const sheets = await Sheet.find({});
	console.log(sheets);
	return res.render("music", { pageTitle: "Music", sheets });
};

export const postMusic = (req, res) => {
	const image = req.file.path;
	console.log(req.file);
	return res.render("music", { pageTitle: "Music", image });
};

export const gallery = (req, res) => {
	return res.render("gallery", { pageTitle: "Gallery" });
};

export const conti = (req, res) => {
	return res.render("conti", { pageTitle: "Conti" });
};

export const login = (req, res) => {
	return res.render("login", { pageTitle: "Login" });
};

export const logout = (req, res) => {
	return res.render("logout", { pageTitle: "Logout" });
};

export const profile = (req, res) => {
	return res.render("profile", { pageTitle: "Profile" });
};
