const express = require('express');
const bodyParser = require('body-parser');
const test = require('./test_folder/test');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('' + __dirname + '/dist'));

app.get('/api/test', (req, res) => {
	console.log('GET', req.query.test_1, req.query.test_2);
	test();

	res.status(200).send({ message: 'get success' });
});

app.post('/api/test', (req, res) => {
	console.log('\nPOST\n');
	
	res.status(200).send({ message: 'post success' });
})

app.put('/api/test', (req, res) => {
	console.log('\nPUT\n');
	
	res.status(200).send({ message: 'put success'});
})

app.listen(9000, '0.0.0.0', () => {
	console.log('Product Aggregator listening on port 9000!');
});
