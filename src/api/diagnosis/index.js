const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./diagnosis.resolvers');

const typeDefs = gqlLoader('diagnosis/diagnosis.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
