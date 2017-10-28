exports.get = (req, res) => {
	let product_id = req.params.product_id;

	console.log('PRODUCT_ID', product_id);
	console.log('GET', req.query.start_date, req.query.end_date);

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
};
