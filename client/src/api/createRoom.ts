import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

export const useSetRoom = (roomName: string) => {
  const SET_ROOM = gql`
    mutation {
      createRoom(roomName: $roomName) {
        successful
      }
    }
  `;
  const { data, loading, error } = useQuery(SET_ROOM, {
    variables: { roomName },
  });
  return { data, loading, error };
};
