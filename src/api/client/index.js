const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./client.resolvers');

const typeDefs = gqlLoader('client/client.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
