import Sheet from "../models/Sheet";

export const getUploadMusic = async (req, res) => {
	const sheets = await Sheet.find({});
	return res.render("upload-music", { pageTitle: "Upload Music", sheets });
};

export const postUploadMusic = async (req, res) => {
	const { title, description, hashtags } = req.body;
	try {
		await Sheet.create({
			title,
			description,
			hashtags: Sheet.formatHashtags(hashtags),
		});
		return res.redirect("/music");
	} catch (error) {
		return res.render("upload-music", {
			pageTitle: "Upload Music",
			errorMessage: error._message,
		});
	}
};

export const seeMusic = async (req, res) => {
	const { id } = req.params;
	const sheet = await Sheet.findById(id);
	if (!sheet) {
		return res.render("404", { pageTitle: "Sheet not found." });
	}
	return res.render("see-music", { pageTitle: sheet.title, sheet });
};

export const getEditMusic = async (req, res) => {
	const { id } = req.params;
	const sheet = await Sheet.findById(id);
	if (!sheet) {
		return res.render("404", { pageTitle: "Sheet not found." });
	}
	return res.render("edit-sheet", { pageTitle: `Edit: ${sheet.title}`, sheet });
};

export const postEditMusic = async (req, res) => {
	const { id } = req.params;
	const { title, description, hashtags } = req.body;
	const sheet = await Sheet.exists({ _id: id });
	if (!sheet) {
		return res.render("404", { pageTitle: "Sheet not found." });
	}
	await Sheet.findByIdAndUpdate(id, {
		title,
		description,
		hashtags: Sheet.formatHashtags(hashtags),
	});
	return res.redirect(`/music/${id}`);
};

export const deleteMusic = async (req, res) => {
	const { id } = req.params;
	await Sheet.findByIdAndDelete(id);
	return res.redirect("/music");
};

export const searchMusic = async (req, res) => {
	const { keyword } = req.query;
	let sheets = [];
	if (keyword) {
		sheets = await Sheet.find({
			title: {
				$regex: new RegExp(keyword, "i"),
			},
		});
	}
	return res.render("search", { pageTitle: "Search", sheets });
};
