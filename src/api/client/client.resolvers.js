const client = (parent, { input: { id } }, context) =>
  context.prisma.client({ id });

const clients = (parent, args, context) => context.prisma.clients();

const createClient = (parent, { input }, context) =>
  context.prisma.createClient(input);

const deleteClient = (parent, { where }, context) =>
  context.prisma.deleteClient(where);

const updateClient = (parent, { input, where }, context) =>
  context.prisma.updateClient({ data: input, where });

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
  Client: {
    parents: (parent, args, context) =>
      context.prisma.client({ id: parent.id }).parents(),
  },
};

module.exports = clientResolvers;
