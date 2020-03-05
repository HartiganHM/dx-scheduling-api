const parent = (parent, { where }, context) => context.prisma.parent(where);

const parents = (parent, args, context) => context.prisma.parents();

const createParent = (parent, { input }, context) =>
  context.prisma.createParent(input);

const deleteParent = (parent, { where }, context) =>
  context.prisma.deleteParent(where);

const updateParent = (parent, { input, where }, context) =>
  context.prisma.updateParent({ data: input, where });

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
  Parent: {
    address: (parent, args, context) =>
      context.prisma.parent({ id: parent.id }).address(),
  },
};

module.exports = parentResolvers;
