var mongoose = require('mongoose');
require('mongoose-type-url');


var User = mongoose.Schema({
	login: String,
	username: String,
	user_img: String,
	image: mongoose.SchemaTypes.Url,
 	phone_number: String,
 	school: String
});

module.exports = mongoose.model('User', User);
