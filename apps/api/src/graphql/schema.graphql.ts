import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type Message {
    message: String
  }

  type Query {
    hello: Message
  }
`;

export default typeDefs;
