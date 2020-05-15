const gqlLoader = require('../../utilities/gqlLoader');
const resolvers = require('./intakeFormQuestions.resolvers');

const typeDefs = gqlLoader('intakeFormQuestions/intakeFormQuestions.graphql');

module.exports = {
  resolvers,
  typeDefs,
};
