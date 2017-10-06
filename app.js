const express = require('express');
const bodyParser = require('body-parser');
const test = require('./test_folder/test');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('' + __dirname + '/dist'));

app.get('/api/test', (req, res) => {
	console.log('KEK');
	test();

	res.status(200).send({ message: 'success' });
});

app.listen(9000, '0.0.0.0', () => {
	console.log('Project X listening on port 9000!');
});
