const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema(
	{
		name: String
	},
	{
		timestamps: true
	}
)

const CategoryModel = mongoose.model('Category', CategorySchema)
module.exports = CategoryModel
