const { getProductById } = require('./productService');

async function getProduct(req) {
	console.log(req.id);
	return await getProductById(req.id);
}

module.exports = {
	product: getProduct,
}; 
