const merge = require('lodash/merge');

const address = require('./address');
const client = require('./client');
const insurance = require('./insurance');
const parent = require('./parent');
const permission = require('./permission');
const physician = require('./physician');
const role = require('./role');
const user = require('./user');

const typeDefs = [
  address.typeDefs,
  client.typeDefs,
  insurance.typeDefs,
  parent.typeDefs,
  permission.typeDefs,
  physician.typeDefs,
  role.typeDefs,
  user.typeDefs,
].join(' ');

const resolvers = merge(
  {},
  address.resolvers,
  client.resolvers,
  insurance.resolvers,
  parent.resolvers,
  permission.resolvers,
  physician.resolvers,
  role.resolvers,
  user.resolvers
);

module.exports = {
  typeDefs,
  resolvers,
};
