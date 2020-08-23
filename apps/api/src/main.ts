import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const port = process.env.port || 3333;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}${server.graphqlPath}`);
});
