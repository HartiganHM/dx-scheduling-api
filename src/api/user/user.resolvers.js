const user = (parent, { id }, context) => {
  return context.prisma.role({ id });
}

const users = (parent, args, context) => {
  return context.prisma.users();
}

const createUser = (parent, { input: { name, email, roles } }, context) => {
  return context.prisma.createUser({ name, email, roles });
}

const userResolvers = {
  Query: {
    user,
    users,
  },
  Mutation: {
    createUser,
  }
}

module.exports = userResolvers;
