const insurance = (parent, { input }, context) =>
  context.prisma.insurance(input);

const insurances = (parent, args, context) => context.prisma.insurances();

const createInsurance = (parent, { input }, context) =>
  context.prisma.createInsurance(input);

const deleteInsurance = (parent, { where }, context) =>
  context.prisma.deleteInsurance(where);

const updateInsurance = (parent, { input, where }, context) =>
  context.prisma.updateInsurance({ data: input, where });

const insuranceResolvers = {
  Query: {
    insurance,
    insurances,
  },
  Mutation: {
    createInsurance,
    deleteInsurance,
    updateInsurance,
  },
};

module.exports = insuranceResolvers;
