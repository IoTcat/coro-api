/*  coro-py
*
*  By iotcat (https://iotcat.me)
*  MIT Licensed
* 
*/
module.exports = async (params) => {

	var o_params = {
		reg: {
			inland: /getAreaStat\s=\s([\s\S]*?)}catch\(e\)/,
			oversea: /getListByCountryTypeService2true\s=\s([\s\S]*?)}catch\(e\)/
		},
		url: 'https://ncov.dxy.cn/ncovh5/view/pneumonia'
	}

	Object.assign(o_params, params);

	var o = [];

	const request = require('request');


	return new Promise((resolve, reject) => {
		request(o_params.url, (err, res, body) => {
			if(err){
				reject(err);
			}else{
				try{
					o = JSON.parse(body.match(o_params.reg.inland)[1]);
					o.push.apply(o, JSON.parse(body.match(o_params.reg.oversea)[1]));
					resolve(o);
				}catch(e){
					reject(e);
				}
			}
		});
	});
}



