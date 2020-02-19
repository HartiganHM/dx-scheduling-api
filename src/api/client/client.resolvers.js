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

const updateClient = (parent, { input, where }, context) => {
  console.log({ input, where })
  return context.prisma.updateClient({ data: input, where });
};


const clientResolvers = {
  Query: {
    client,
    clients,
  },
  Mutation: {
    createClient,
    updateClient,
  },
};

module.exports = clientResolvers;
