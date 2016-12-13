var mongoose = require('mongoose');

var Post = mongoose.Schema({
	title: String,
	class_number: String,
	created_at: Date,
	description: String,
	username: String,
	login: String,
	user_img: String,
});

module.exports = mongoose.model('Post', Post);
