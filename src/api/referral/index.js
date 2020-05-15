const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./referral.resolvers');

const typeDefs = gqlLoader('referral/referral.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
