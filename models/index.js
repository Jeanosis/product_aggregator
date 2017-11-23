const fs = require('fs');

fs.readdirSync(__dirname)
	.filter(filename => filename !== 'index.js')
	.forEach(filename => {
		let model = require(`./${filename}`);
		let { modelName } = model;

		exports[modelName] = model;
	});
