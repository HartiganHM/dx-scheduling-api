const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./physician.resolvers');

const typeDefs = gqlLoader('physician/physician.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
