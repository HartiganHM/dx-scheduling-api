const role = (parent, { where }, context) => context.prisma.role(where);

const roles = (parent, args, context) => context.prisma.roles();

const createRole = (parent, { input: { name, permissions } }, context) =>
  context.prisma.createRole({ name, permissions });

const updateRole = (parent, { input: { name }, where: { id } }, context) =>
  context.prisma.updateRole({ data: { name }, where: { id } });

const roleResolvers = {
  Query: {
    role,
    roles,
  },
  Mutation: {
    createRole,
    updateRole,
  },
};

module.exports = roleResolvers;
