const merge = require('lodash/merge');

const permission = require('./permission');
const role = require('./role');

const typeDefs = [permission.typeDefs, role.typeDefs].join(' ');

const resolvers = merge({}, permission.resolvers, role.resolvers);

module.exports = {
  typeDefs,
  resolvers
};
