const searchEndPoint = 'http://search.si.aop.cambridge.org:3000/v1/';
const request = require('request');

async function getProductById(id) {
	return new Promise((resolve, reject) => {
		request(
			`${searchEndPoint}/product/${id}?projection=full`, 
			{json: true},
			(err, resp, body) => {
				if (err || resp.statusCode !== 200) return reject(err);
				return resolve(body.results[0]['_source']);
			}
		);
	});	
}

module.exports = {
	getProductById,
}
