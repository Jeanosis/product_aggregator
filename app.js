const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const config = require('./config/');
const uri = config.get('mongoose:uri');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('' + __dirname + '/dist'));

(async () => {
	mongoose.Promise = Promise;
	await mongoose.connect(uri, { useMongoClient: true });

	// Applying routes
	app.use(routes);

	app.listen(9000, '0.0.0.0', () => {
		console.log('Product Aggregator listening on port 9000!');
	});
})();
