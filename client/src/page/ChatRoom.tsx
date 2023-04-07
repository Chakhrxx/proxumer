import "../assets/css/theme.css";
import React, { useState, useEffect } from "react";
import { Box, TextField, FormControl, Typography } from "@mui/material";
import { MessageRight, MessageLeft } from "../assets/components/message";
import {
  inputSenderState,
  inputMessageState,
  inputRoomState,
} from "../stores/chat";
import { useRecoilState } from "recoil";
import { useGetMessage } from "../api/messages";
import { useSetMessage } from "../api/sendMessage";

const ChatRoom = () => {
  const [inputSender] = useRecoilState(inputSenderState);
  const [inputRoom] = useRecoilState(inputRoomState);
  const [leftMessages, setLeftMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useRecoilState(inputMessageState);

  interface MyObject {
    [key: string]: any;
  }

  useEffect(() => {
    const newMessages = useGetMessage(inputRoom);
    if (newMessages?.data?.messages) {
      setLeftMessages(newMessages?.data?.messages);
    }
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      useSetMessage(inputRoom, {
        body: inputMessage,
        image:
          "https://play-lh.googleusercontent.com/9N5WyhIgseJWfmtPCvJwik1rumF1jeTMqhV1Rxu_zU88duWQK9btrxVr4-Sn10HbcqCs",
        from: {
          name: inputSender,
        },
      });
      const newMessages: any = [...messages, { body: inputMessage }];
      setMessages(newMessages);
      setInputMessage("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Prompt",
          fontSize: "2.313rem",
          margin: "3rem 0 .75rem 0",
          color: "#383838",
        }}
      >
        {inputRoom}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          height: "70%",
          overflowY: "auto",
        }}
      >
        {leftMessages.map((message, index) => {
          const obj: MyObject = message;
          return (
            <MessageLeft
              key={index}
              message={obj?.body}
              displayName={`คุณ ${obj?.from?.name}`}
            />
          );
        })}
        {messages.map((message, index) => {
          const obj: MyObject = message;
          return <MessageRight key={index} message={obj?.body} />;
        })}
      </Box>

      <TextField
        id="outlined-basic"
        variant="outlined"
        value={inputMessage}
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => setInputMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        }}
        sx={{
          "& input": {
            textAlign: "center",
            fontSize: "2rem",
            color: "#383838",
            fontFamily: "Prompt",
          },
          width: "100%",
        }}
      />
      <FormControl></FormControl>
    </Box>
  );
};

export default ChatRoom;
