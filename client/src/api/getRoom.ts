import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

export const useGetRoom = (roomName: string) => {
  const GET_ROOM = gql`
    query {
      getRooms(roomName: $roomName) {
        roomName
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_ROOM, {
    variables: { roomName },
  });
  return { data, loading, error };
};
