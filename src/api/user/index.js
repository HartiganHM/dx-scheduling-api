const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./user.resolvers');

const typeDefs = gqlLoader('user/user.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
