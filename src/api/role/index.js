const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./role.resolvers');

const typeDefs = gqlLoader('role/role.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
