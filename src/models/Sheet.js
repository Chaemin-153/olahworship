import mongoose from "mongoose";

const sheetSchema = new mongoose.Schema({
	title: { type: String, required: true, trim: true },
	description: { type: String, required: true, trim: true },
	createdAt: { type: Date, required: true, default: Date.now },
	hashtags: [{ type: String, trim: true }],
	meta: {
		views: { type: Number, default: 0, required: true },
		rating: { type: Number, default: 0, required: true },
	},
});

sheetSchema.static("formatHashtags", function (hashtags) {
	return hashtags
		.split(",")
		.map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Sheet = mongoose.model("Sheet", sheetSchema);
export default Sheet;
