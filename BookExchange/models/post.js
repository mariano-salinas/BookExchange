var mongoose = require('mongoose');

var Post = mongoose.Schema({
	title: String,
	class_number: String,
	created_at: Date,
	description: String,
	username: String,
	user_img: String,
 	books : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Post', Post);
