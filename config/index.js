const nconf = require('nconf');
const appRoot = require('app-root-path');

nconf.argv()
	.env()
	.file({ file: appRoot.path + '/config.json' });

module.exports = nconf;
