const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./parent.resolvers');

const typeDefs = gqlLoader('parent/parent.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
