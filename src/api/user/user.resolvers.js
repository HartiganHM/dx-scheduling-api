const user = (parent, { where }, context) => context.prisma.role(where);

const users = (parent, args, context) => context.prisma.users();

const createUser = (parent, { input: { name, email, roles } }, context) =>
  context.prisma.createUser({ name, email, roles });

const userResolvers = {
  Query: {
    user,
    users,
  },
  Mutation: {
    createUser,
  },
};

module.exports = userResolvers;
