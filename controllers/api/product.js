const appRoot = require('app-root-path');
const { Product } = require(appRoot + '/models');

exports.get = (req, res) => {
	let { product_id } = req.params;

	let { start_date, end_date } = req.query;

	console.log('PRODUCT_ID', product_id);
	console.log('GET', start_date, end_date);

	let dates = await Product.find({ start_date, end_date });

	let start_timestamp = Date.parse(start_date);
	let end_timestamp = Date.parse(end_date);

	let errors = [];

	if (isNaN(start_timestamp)) {
		errors.push({ message: 'start_date is invalid' });
	}

	if (isNaN(end_timestamp)) {
		errors.push({ message: 'end_date is invalid' });
	}

	if (errors.length > 0) {
		res.status(400).json({ errors });
	} else {
		res.status(200).json({
			name: 'product_name',
			price: {
				current: 0,
				daily: [
					{
						value: 0,
						date: '2017-10-07'
					}
				]
			}
		});
	}
};
