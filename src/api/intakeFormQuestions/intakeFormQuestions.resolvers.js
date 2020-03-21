const intakeFormQuestions = (parent, { where }, context) =>
  context.prisma.intakeFormQuestions(where);

const intakeFormQuestionses = (parent, args, context) =>
  context.prisma.intakeFormQuestionses();

const createIntakeFormQuestions = (parent, { input }, context) =>
  context.prisma.createIntakeFormQuestions(input);

const deleteIntakeFormQuestions = (parent, { where }, context) =>
  context.prisma.deleteIntakeFormQuestions(where);

const updateIntakeFormQuestions = (parent, { input, where }, context) =>
  context.prisma.updateIntakeFormQuestions({ data: input, where });

const intakeFormQuestionsResolvers = {
  Query: {
    intakeFormQuestions,
    intakeFormQuestionses,
  },
  Mutation: {
    createIntakeFormQuestions,
    deleteIntakeFormQuestions,
    updateIntakeFormQuestions,
  },
  IntakeFormQuestions: {
    referral: (parent, args, context) =>
      context.prisma.intakeFormQuestions({ id: parent.id }).referral(),
    diagnosis: () => (parent, args, context) =>
      context.prisma.intakeFormQuestions({ id: parent.id }).diagnosis(),
    concerns: () => (parent, args, context) =>
      context.prisma.intakeFormQuestions({ id: parent.id }).concerns(),
  },
};

module.exports = intakeFormQuestionsResolvers;
