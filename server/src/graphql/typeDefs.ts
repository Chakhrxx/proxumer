import { gql } from "apollo-server";

export const typeDefs = gql`
  type Sender {
    name: String
  }
  input SenderInput {
    name: String
  }

  input MessageInput {
    body: String!
    image: String
    from: SenderInput!
  }
  type Message {
    id: String!
    body: String!
    image: String
    from: Sender!
  }

  type Room {
    roomName: String!
  }

  type VoidResponse {
    successful: Boolean
    messages: Message
  }

  type Query {
    messages(roomName: String!): [Message]
    getRooms(roomName: String!): Room
  }

  type Mutation {
    sendMessage(roomName: String!, message: MessageInput): VoidResponse
    createRoom(roomName: String!): VoidResponse
  }

  type Subscription {
    newMessage(roomName: String!): Message!
  }
`;
