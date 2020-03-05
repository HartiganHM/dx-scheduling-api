const intakeFormValues = (parent, { where }, context) =>
  context.prisma.intakeFormValues(where);

const intakeFormValueses = (parent, args, context) =>
  context.prisma.intakeFormValueses();

const createIntakeFormValues = (parent, { input }, context) =>
  context.prisma.createIntakeFormValues(input);

const deleteIntakeFormValues = (parent, { where }, context) =>
  context.prisma.deleteIntakeFormValues(where);

const updateIntakeFormValues = (parent, { input, where }, context) =>
  context.prisma.updateIntakeFormValues({ data: input, where });

const intakeFormValuesResolvers = {
  Query: {
    intakeFormValues,
    intakeFormValueses,
  },
  Mutation: {
    createIntakeFormValues,
    deleteIntakeFormValues,
    updateIntakeFormValues,
  },
  IntakeFormValues: {
    client: (parent, args, context) =>
      context.prisma.intakeFormValues({ id: parent.id }).client(),
  },
};

module.exports = intakeFormValuesResolvers;
