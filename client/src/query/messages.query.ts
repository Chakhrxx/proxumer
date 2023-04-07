import { gql } from "@apollo/client";

export const GET_MESSAGE = gql`
  query {
    messages(roomName: "room1") {
      id
      image
      body
      from {
        name
      }
    }
  }
`;
