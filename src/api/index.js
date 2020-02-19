const merge = require('lodash/merge');

const address = require('./address');
const client = require('./client');
const permission = require('./permission');
const role = require('./role');
const user = require('./user');

const typeDefs = [
  address.typeDefs,
  client.typeDefs,
  permission.typeDefs,
  role.typeDefs,
  user.typeDefs,
].join(' ');

const resolvers = merge(
  {},
  address.resolvers,
  client.resolvers,
  permission.resolvers,
  role.resolvers,
  user.resolvers
);

module.exports = {
  typeDefs,
  resolvers,
};
