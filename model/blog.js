var mongoose = require("mongoose")
var Schema = mongoose.Schema

var blog = new Schema({
	site : String,
	tag_title : String,
	tag_link_article : String,
	tag_date : String,
	entradas : Array

})

var objBlog = mongoose.model('blogs', blog);

module.exports = objBlog;