export let sheets = [
	{
		title: "First Video",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 59,
		id: 1,
	},
	{
		title: "Second Video",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 59,
		id: 2,
	},
	{
		title: "Third Video",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 59,
		id: 3,
	},
];

export const home = (req, res) => {
	return res.render("home", { pageTitle: "Home" });
};

export const worship = (req, res) => {
	return res.render("worship", { pageTitle: "Worship" });
};

export const members = (req, res) => {
	const videos = [
		{
			title: "First Video",
			rating: 5,
			comments: 2,
			createdAt: "2 minutes ago",
			views: 59,
			id: 1,
		},
		{
			title: "Second Video",
			rating: 5,
			comments: 2,
			createdAt: "2 minutes ago",
			views: 59,
			id: 1,
		},
		{
			title: "Third Video",
			rating: 5,
			comments: 2,
			createdAt: "2 minutes ago",
			views: 59,
			id: 1,
		},
	];
	return res.render("members", { pageTitle: "Members", videos });
};

export const album = (req, res) => {
	return res.render("album", { pageTitle: "Album" });
};

export const getMusic = (req, res) => {
	return res.render("music", { pageTitle: "Music", sheets });
};

export const postMusic = (req, res) => {
	const image = req.file.path;
	console.log(req.file);
	return res.render("music", { pageTitle: "Music", image, sheets });
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
