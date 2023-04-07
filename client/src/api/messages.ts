import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

export const useGetMessage = (roomName: string) => {
  const GET_MESSAGE = gql`
    query {
      messages(roomName: $roomName) {
        id
        image
        body
        from {
          name
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_MESSAGE, {
    variables: { roomName },
  });
  return { data, loading, error };
};
