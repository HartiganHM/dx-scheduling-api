const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./concerns.resolvers');

const typeDefs = gqlLoader('concerns/concerns.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
