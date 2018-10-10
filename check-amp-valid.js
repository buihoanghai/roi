const amp = require('./lib/validator').amp;
const fs = require('fs');
fs.readFile("test.html", 'utf8', function (err, data) {
	const validationResult = amp.validator.validateString(data);
	console.log('AMP valid:', validationResult.status);
});
