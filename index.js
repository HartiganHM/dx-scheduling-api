const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  "Description for the type"
  type MyObjectType {
    """
    Description for field
    Supports **multi-line** description for your [API](http://example.com)!
    """
    myField: String!

    otherField(
      "Description for argument"
      arg: Int
    ): String
  }

  type Query {
    books: [Book]
    objects: [MyObjectType]
  }
`;

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
