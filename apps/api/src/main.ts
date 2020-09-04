import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './app';
import { firestore } from './app/db';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    firestore
  })
});
server.applyMiddleware({ app });

const port = process.env.port || 3333;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}${server.graphqlPath}`);
});
