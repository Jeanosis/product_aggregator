const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
	name: String,
	price: Number
});

module.exports = mongoose.model('Product', Product);
