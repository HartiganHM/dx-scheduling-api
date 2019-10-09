const role = (parent, { input: { id } }, context) => {
  return context.prisma.role({ id });
}

const roles = (parent, args, context) => {
  return context.prisma.roles();
}

const createRole = (parent, { input: { name, permissions, roles } }, context) => {
  return context.prisma.createRole({ name, permissions, users });
}

const roleResolvers = {
  Query: {
    role,
    roles,
  },
  Mutation: {
    createRole,
  }
}

module.exports = roleResolvers;
