const physician = (parent, { where }, context) =>
  context.prisma.physician(where);

const physicians = (parent, args, context) => context.prisma.physicians();

const createPhysician = (parent, { input }, context) =>
  context.prisma.createPhysician(input);

const deletePhysician = (parent, { where }, context) =>
  context.prisma.deletePhysician(where);

const updatePhysician = (parent, { input, where }, context) =>
  context.prisma.updatePhysician({ data: input, where });

const physicianResolvers = {
  Query: {
    physician,
    physicians,
  },
  Mutation: {
    createPhysician,
    deletePhysician,
    updatePhysician,
  },
};

module.exports = physicianResolvers;
