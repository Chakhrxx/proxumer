import { mock } from "../data/mock";
import set from "lodash/set";
import get from "lodash/get";
import { v4 as uuidv4 } from "uuid";
import { pubsub } from "./pubsub";

export const resolvers = {
  Query: {
    messages: (parent: any, args: any, ctx: any, info: any) => {
      const { roomName } = args;
      const msgs = get(mock, `rooms.${roomName}.messages`, []);
      return msgs;
    },
    getRooms: (parent: any, args: any, ctx: any, info: any) => {
      const { roomName } = args;
      const rooms = get(mock, `rooms.${roomName}`, []);

      if (rooms.length !== 0)
        return {
          roomName: roomName,
        };
    },
  },
  Mutation: {
    sendMessage: (parent: any, args: any, ctx: any, info: any) => {
      const { roomName, message } = args;
      const msgs = {
        id: uuidv4(),
        body: message?.body,
        image: message?.image,
        from: message?.from,
      };
      set(mock, `rooms.${roomName}`, {
        messages: [...get(mock, `rooms.${roomName}.messages`, []), msgs],
      });

      pubsub.publish(roomName, { data: msgs });

      return {
        successful: true,
        messages: msgs,
      };
    },
    createRoom: (parent: any, args: any, ctx: any, info: any) => {
      const { roomName } = args;
      set(mock, `rooms.${roomName}`, {
        messages: [],
      });
      return {
        successful: true,
      };
    },
  },
  Subscription: {
    newMessage: (parent: any, args: any, ctx: any, info: any) => {
      const { roomName } = args;
      return {
        subscribe: (parent: any, args: any, ctx: any, info: any) => {
          return ctx.pubsub.asyncIterator(roomName);
        },
      };
    },
  },
};
