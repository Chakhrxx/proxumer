import { gql } from "@apollo/client";

export const SET_ROOM = gql`
  mutation {
    createRoom(roomName: "room2") {
      successful
    }
  }
`;
