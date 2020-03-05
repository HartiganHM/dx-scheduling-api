const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./intakeFormValues.resolvers');

const typeDefs = gqlLoader('intakeFormValues/intakeFormValues.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
