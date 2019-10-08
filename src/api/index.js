const merge = require('lodash/merge');

const permission = require('./permission');

const typeDefs = [permission.typeDefs].join(' ');

const resolvers = merge({}, permission.resolvers);

module.exports = {
  typeDefs,
  resolvers
};
