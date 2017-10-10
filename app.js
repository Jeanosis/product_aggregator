const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('' + __dirname + '/dist'));

app.use(routes);

app.listen(9000, '0.0.0.0', () => {
	console.log('Product Aggregator listening on port 9000!');
});
