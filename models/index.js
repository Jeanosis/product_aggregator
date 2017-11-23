const fs = require('fs');

fs.readdirSync(__dirname)
	.filter(name => name !== 'index.js')
	.forEach(file_name => {
		let name = file_name.replace(/\..*$/g, '');

		exports[name] = require(`./${file_name}`);
	});
