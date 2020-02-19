const merge = require('lodash/merge');

const client = require('./client');
const permission = require('./permission');
const role = require('./role');
const user = require('./user');

const typeDefs = [
  client.typeDefs,
  permission.typeDefs,
  role.typeDefs,
  user.typeDefs,
].join(' ');

const resolvers = merge(
  {},
  client.resolvers,
  permission.resolvers,
  role.resolvers,
  user.resolvers
);

module.exports = {
  typeDefs,
  resolvers,
};
