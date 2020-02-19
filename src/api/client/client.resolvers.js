const client = (parent, { input: { id } }, context) =>
  context.prisma.client({ id });

const clients = (parent, args, context) => context.prisma.clients();

const createClient = (
  parent,
  { input: { firstName, lastName, dob, gender, school, grade } },
  context
) => {
  return context.prisma.createClient({
    firstName,
    lastName,
    dob,
    gender,
    school,
    grade,
  });
};

const deleteClient = (parent, { where }, context) =>
  context.prisma.deleteClient(where);

const updateClient = (parent, { input, where }, context) => {
  return context.prisma.updateClient({ data: input, where });
};

const clientResolvers = {
  Query: {
    client,
    clients,
  },
  Mutation: {
    createClient,
    deleteClient,
    updateClient,
  },
};

module.exports = clientResolvers;
