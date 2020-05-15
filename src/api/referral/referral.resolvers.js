const referral = (parent, { where }, context) => context.prisma.referral(where);

const referrals = (parent, args, context) => context.prisma.referrals();

const createReferral = (parent, { input }, context) =>
  context.prisma.createReferral(input);

const deleteReferral = (parent, { where }, context) =>
  context.prisma.deleteReferral(where);

const updateReferral = (parent, { input, where }, context) =>
  context.prisma.updateReferral({ data: input, where });

const referralResolvers = {
  Query: {
    referral,
    referrals,
  },
  Mutation: {
    createReferral,
    deleteReferral,
    updateReferral,
  },
};

module.exports = referralResolvers;
