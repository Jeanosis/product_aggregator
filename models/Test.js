const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Test = new Schema({
	test_1: Number,
	test_2: String
});

module.exports = mongoose.model('Test', Test);
