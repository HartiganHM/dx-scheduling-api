const merge = require('lodash/merge');

const permission = require('./permission');
const role = require('./role');
const user = require('./user');

const typeDefs = [permission.typeDefs, role.typeDefs, user.typeDefs].join(' ');

const resolvers = merge({}, permission.resolvers, role.resolvers, user.resolvers);

module.exports = {
  typeDefs,
  resolvers
};
