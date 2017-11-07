exports.get = (req, res) => {
	let { product_id } = req.params;
	// let product_id = req.params.product_id;

	let { start_date, end_date } = req.query;

	console.log('PRODUCT_ID', product_id);
	console.log('GET', start_date, end_date);

	let start_timestamp = Date.parse(start_date);
	let end_timestamp = Date.parse(end_date);

	if (isNaN(start_timestamp)) {
		res.status(400).json({ message: 'start_date is invalid' });
	} else if (isNaN(end_timestamp)) {
		res.status(400).json({ message: 'end_date is invalid' });
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
