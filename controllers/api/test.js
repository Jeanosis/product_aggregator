const appRoot = require('app-root-path');
const { Test } = require(appRoot + '/models');

exports.get = async (req, res) => {
	let { test_1, test_2 } = req.query;
	console.log('GET', test_1, test_2);

	let tests = await Test.find({ test_1, test_2 });
	let response = tests.map(t => {
		let { test_1, test_2 } = t;

		return { test_1, test_2 };
	});

	res.status(200).json(response);
};

exports.put = (req, res) => {
	console.log('\nPUT\n', req.body);

	res.status(200).json({ message: 'post success' });
};

exports.post = (req, res) => {
	console.log('\nPOST\n', req.body);

	res.status(200).json({ message: 'post success' });
};
