const role = (parent, { input: { id } }, context) => {
  return context.prisma.role({ id });
}

const roles = (parent, args, context) => {
  return context.prisma.roles();
}

const createRole = (parent, { input: { name, permissions } }, context) => {
  return context.prisma.createRole({ name, permissions });
}

const updateRole = (parent, { input: { name }, where: { id } }, context) => {
  return context.prisma.updateRole({ data: { name }, where: { id }})
}

const roleResolvers = {
  Query: {
    role,
    roles,
  },
  Mutation: {
    createRole,
    updateRole,
  }
}

module.exports = roleResolvers;
