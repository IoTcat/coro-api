/*  coro-py-uk
*
*  By iotcat (https://iotcat.me)
*  MIT Licensed
* 
*/
module.exports = async (params) => {

	var o_params = {
		reg: /negative\sand\s(\S*)\spositive/,
		url: 'https://www.gov.uk/guidance/coronavirus-covid-19-information-for-the-public#number-of-cases'
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
					o = body.match(o_params.reg)[1];
					resolve(o);
				}catch(e){
					reject(e);
				}
			}
		});
	});
}



