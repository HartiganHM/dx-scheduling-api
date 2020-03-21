const clientIntake = (parent, { where }, context) =>
  context.prisma.clientIntake(where);

const clientIntakes = (parent, args, context) => context.prisma.clientIntakes();

const createClientIntake = (parent, { input }, context) =>
  context.prisma.createClientIntake(input);

const deleteClientIntake = (parent, { where }, context) =>
  context.prisma.deleteClientIntake(where);

const updateClientIntake = (parent, { input, where }, context) =>
  context.prisma.updateClientIntake({ data: input, where });

const clientIntakeResolvers = {
  Query: {
    clientIntake,
    clientIntakes,
  },
  Mutation: {
    createClientIntake,
    deleteClientIntake,
    updateClientIntake,
  },
  ClientIntake: {
    intakeFormValues: (parent, args, context) =>
      context.prisma.clientIntake({ id: parent.id }).intakeFormValues(),
    intakeFormQuestions: (parent, args, context) =>
      context.prisma.clientIntake({ id: parent.id }).intakeFormQuestions(),
  },
};

module.exports = clientIntakeResolvers;
