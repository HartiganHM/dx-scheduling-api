const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./clientIntake.resolvers');

const typeDefs = gqlLoader('clientIntake/clientIntake.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
