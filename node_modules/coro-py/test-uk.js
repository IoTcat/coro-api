const coro = require('./uk.js');

(async () => {
	console.log(await coro());
})()