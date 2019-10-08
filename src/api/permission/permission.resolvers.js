const permission = (parent, { id }, context) => {
  return context.prisma.permission({ id });
};

const permissions = (parent, args, context) => {
  return context.prisma.permissions();
}; 

const createPermission = (parent, { input: { name } }, context) => {
  console.log(name)
  return context.prisma.createPermission({ name });
};

const permissionResolvers = {
  Query: {
    permission,
    permissions
  },
  Mutation: {
    createPermission
  }
}

module.exports = permissionResolvers;