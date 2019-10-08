const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./permission.resolvers');

const typeDefs = gqlLoader('permission/permission.graphql');

module.exports = {
  resolvers,
  typeDefs
};
