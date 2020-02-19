const address = (parent, { input }, context) => context.prisma.address(input);

const addresses = (parent, args, context) => context.prisma.addresses();

const createAddress = (parent, { input }, context) =>
  context.prisma.createAddress(input);

const deleteAddress = (parent, { where }, context) =>
  context.prisma.deleteAddress(where);

const updateAddress = (parent, { input, where }, context) =>
  context.prisma.updateAddress({ data: input, where });

const addressResolvers = {
  Query: {
    address,
    addresses,
  },
  Mutation: {
    createAddress,
    deleteAddress,
    updateAddress,
  },
};

module.exports = addressResolvers;
