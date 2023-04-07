import { atom } from "recoil";

export const inputSenderState = atom({
  key: "inputSenderState",
  default: "",
});
export const senderState = atom({
  key: "senderState",
  default: [],
});
export const inputRoomState = atom({
  key: "inputRoomState",
  default: "",
});
export const roomState = atom({
  key: "roomState",
  default: {},
});
export const messagesState = atom({
  key: "messagesState",
  default: [],
});
export const inputMessageState = atom({
  key: "inputMessageState",
  default: "",
});

export const rooms = atom({
  key: "rooms",
  default: [],
});
