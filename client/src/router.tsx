import Sender from "./page/Sender";
import Room from "./page/Room";
import CreateRoom from "./page/CreateRoom";
import JoinRoom from "./page/JoinRoom";
import ChatRoom from "./page/ChatRoom";

export const publicRoutes = [
  {
    path: "/",
    element: <Sender />,
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "/create-room",
    element: <CreateRoom />,
  },
  {
    path: "/join-room",
    element: <JoinRoom />,
  },
  {
    path: "/chat-room",
    element: <ChatRoom />,
  },
];
