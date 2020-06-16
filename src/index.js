/*
 * @proj: coro-api
 * @Author: IoTcat (https://iotcat.me) 
 * @Date: 2020-02-04 11:34:32 
 */
const coro = require('coro-py');
var app = require('express')();

app.listen(17676 /*default port*/, () => console.log('Coro API listening on port 17676!'));

app.get('/', async (req, res) => {
	/* corss domain */
	res.header("Access-Control-Allow-Origin", "*");

	/* get info from coro-py */
	var o = await coro();

	/* req province & city */
	if(req.query.hasOwnProperty('province')){
		/* reg province */
		o =	await (async () => new Promise(resolve => {
			o.forEach((item, index) => {
				if(item.provinceName == req.query.province || item.provinceShortName == req.query.province){
					resolve(item);
				}else{
					if(index == o.length-1){
						resolve({});
					}
				}
			});
		}))();
		/* reg city */
		if(req.query.hasOwnProperty('city') && o.hasOwnProperty('cities')){
			o = await (async () => new Promise(resolve => {
				o.cities.forEach((item, index) => {
					if(item.cityName == req.query.city){
						resolve(item);
					}else{
						if(index == o.length-1){
							resolve({});
						}
					}
				});
			}))();
		}

		res.send(o);
		return;
	}

	/* req city */
	if(req.query.hasOwnProperty('city')){
		o =	await (async () => new Promise(resolve => {
			o.forEach((item, index) => {
				if(item.hasOwnProperty('cities')){

					item.cities.forEach((city, city_index) => {
						if(city.cityName == req.query.city){
							resolve(city);
						}else{
							if(city_index == item.cities.length-1 && index == o.length-1){
								resolve({});
							}
						}
					});
				}else{
					if(index == o.length-1){
						resolve({});
					}
				}
			});
		}))();

		res.send(o);
		return;
	}

	/* other */
	res.send(o);

});
