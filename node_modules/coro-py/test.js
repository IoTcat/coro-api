const coro = require('./index.js');

(async () => {
	console.log(await coro());
})()