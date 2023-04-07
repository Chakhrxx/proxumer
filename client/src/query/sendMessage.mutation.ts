import { gql } from "@apollo/client";

export const SET_MESSAGE = gql`
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
