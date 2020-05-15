const merge = require('lodash/merge');

const address = require('./address');
const client = require('./client');
const clientIntake = require('./clientIntake');
const concerns = require('./concerns');
const diagnosis = require('./diagnosis');
const intakeFormQuestions = require('./intakeFormQuestions');
const intakeFormValues = require('./intakeFormValues');
const insurance = require('./insurance');
const parent = require('./parent');
const permission = require('./permission');
const physician = require('./physician');
const referral = require('./referral');
const role = require('./role');
const user = require('./user');

const typeDefs = [
  address.typeDefs,
  client.typeDefs,
  clientIntake.typeDefs,
  concerns.typeDefs,
  diagnosis.typeDefs,
  intakeFormQuestions.typeDefs,
  intakeFormValues.typeDefs,
  insurance.typeDefs,
  parent.typeDefs,
  permission.typeDefs,
  physician.typeDefs,
  referral.typeDefs,
  role.typeDefs,
  user.typeDefs,
].join(' ');

const resolvers = merge(
  {},
  address.resolvers,
  client.resolvers,
  clientIntake.resolvers,
  concerns.resolvers,
  diagnosis.resolvers,
  intakeFormQuestions.resolvers,
  intakeFormValues.resolvers,
  insurance.resolvers,
  parent.resolvers,
  permission.resolvers,
  physician.resolvers,
  referral.resolvers,
  role.resolvers,
  user.resolvers
);

module.exports = {
  typeDefs,
  resolvers,
};
