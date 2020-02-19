const permission = (parent, { input: { id } }, context) =>
  context.prisma.permission({ id });

const permissions = (parent, args, context) => context.prisma.permissions();

const createPermission = (parent, { input: { name, roles } }, context) => {
  return context.prisma.createPermission({ name, roles });
};

const updatePermission = (
  parent,
  { input: { name }, where: { id } },
  context
) => {
  return context.prisma.updatePermission({ data: { name }, where: { id } });
};

const permissionResolvers = {
  Query: {
    permission,
    permissions,
  },
  Mutation: {
    createPermission,
    updatePermission,
  },
};

module.exports = permissionResolvers;
