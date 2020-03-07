const concerns = (parent, { where }, context) => context.prisma.concerns(where);

const concernses = (parent, args, context) => context.prisma.concernses();

const createConcerns = (parent, { input }, context) =>
  context.prisma.createConcerns(input);

const deleteConcerns = (parent, { where }, context) =>
  context.prisma.deleteConcerns(where);

const updateConcerns = (paren, { input, where }, context) =>
  context.prisma.updateConcerns({ data: input, where });

const concernsResolvers = {
  Query: {
    concerns,
    concernses,
  },
  Mutation: {
    createConcerns,
    deleteConcerns,
    updateConcerns,
  },
};

module.exports = concernsResolvers;
