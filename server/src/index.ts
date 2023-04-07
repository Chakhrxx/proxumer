import { ApolloServer, gql } from "apollo-server";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
