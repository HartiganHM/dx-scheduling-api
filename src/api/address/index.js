const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./address.resolvers');

const typeDefs = gqlLoader('address/address.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
