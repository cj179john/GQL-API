const { buildSchema } = require('graphql');

module.exports = buildSchema(`
	type Query {
		product(id: String!): Product
	},
	type Product {
		productId: String!
		title: String
		productType: String
		status: String
		createdAt: String 
	}
`); 
