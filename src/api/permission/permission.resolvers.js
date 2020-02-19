const permission = (parent, { input }, context) =>
  context.prisma.permission(input);

const permissions = (parent, args, context) => context.prisma.permissions();

const createPermission = (parent, { input }, context) => {
  return context.prisma.createPermission(input);
};

const deletePermission = (parent, { where }, context) =>
  context.prisma.deletePermission(where);

const updatePermission = (parent, { input, where }, context) => {
  return context.prisma.updatePermission({ data: input, where });
};

const permissionResolvers = {
  Query: {
    permission,
    permissions,
  },
  Mutation: {
    createPermission,
    deletePermission,
    updatePermission,
  },
};

module.exports = permissionResolvers;
