exports.get = (req, res) => {
	console.log('GET', req.query.test_1, req.query.test_2);

	res.status(200).json({ message: 'get success' });
};

exports.put = (req, res) => {
	console.log('\nPUT\n', req.body);

	res.status(200).json({ message: 'post success' });
};

exports.post = (req, res) => {
	console.log('\nPOST\n', req.body);

	res.status(200).json({ message: 'post success' });
};
