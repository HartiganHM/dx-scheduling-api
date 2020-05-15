const diagnosis = (parent, { where }, context) =>
  context.prisma.diagnosis(where);

const diagnosises = (parent, args, context) => context.prisma.diagnosises();

const createDiagnosis = (parent, { input }, context) =>
  context.prisma.createDiagnosis(input);

const deleteDiagnosis = (parent, { where }, context) =>
  context.prisma.deleteDiagnosis(where);

const updateDiagnosis = (parent, { input, where }, context) =>
  context.prisma.updateDiagnosis({ data: input, where });

const diagnosisResolvers = {
  Query: {
    diagnosis,
    diagnosises,
  },
  Mutation: {
    createDiagnosis,
    deleteDiagnosis,
    updateDiagnosis,
  },
};

module.exports = diagnosisResolvers;
