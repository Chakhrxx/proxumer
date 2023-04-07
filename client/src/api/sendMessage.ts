import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

type messageObj = {
  body: string;
  image: string;
  from: {
    name: string;
  };
};

export const useSetMessage = (roomName: string, message: messageObj) => {
  const { body, image, from } = message;
  const { name } = from;

  const SET_MESSAGE = gql`
    mutation {
      sendMessage(
        roomName: $roomName
        message: { body: $body, image: $image, from: { name: $name } }
      ) {
        successful
        messages {
          id
          body
          image
          from {
            name
          }
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(SET_MESSAGE, {
    variables: { roomName, body, image, name },
  });
  console.log({ data, loading, error });

  return { data, loading, error };
};
