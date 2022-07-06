const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		createdBy: { type: String, required: true },
		entries: { type: Array }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
