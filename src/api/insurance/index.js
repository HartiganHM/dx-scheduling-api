const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./insurance.resolvers');

const typeDefs = gqlLoader('insurance/insurance.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
