const parent = (parent, { input }, context) => context.prisma.parent(input);

const parents = (parent, args, context) => context.prisma.parents();

const createParent = (parent, { input }, context) => {
  return context.prisma.createParent(input);
};

const deleteParent = (parent, { where }, context) =>
  context.prisma.deleteParent(where);

const updateParent = (parent, { input, where }, context) => {
  return context.prisma.updateParent({ data: input, where });
};

const parentResolvers = {
  Query: {
    parent,
    parents,
  },
  Mutation: {
    createParent,
    deleteParent,
    updateParent,
  },
};

module.exports = parentResolvers;
