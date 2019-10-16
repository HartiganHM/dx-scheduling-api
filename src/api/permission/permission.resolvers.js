const permission = (parent, { input: { id } }, context) => {
  return context.prisma.permission({ id });
};

const permissions = (parent, args, context) => {
  return context.prisma.permissions();
}; 

const createPermission = (parent, { input: { name, roles } }, context) => {
  return context.prisma.createPermission({ name, roles });
};

const updatePermission = (parent, { input: { name }, where: { id } }, context) => {
  return context.prisma.updatePermission({ name }, { id });
}

const permissionResolvers = {
  Query: {
    permission,
    permissions
  },
  Mutation: {
    createPermission,
    updatePermission,
  }
}

module.exports = permissionResolvers;