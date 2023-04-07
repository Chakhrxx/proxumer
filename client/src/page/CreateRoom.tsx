import React from "react";
import "../assets/css/theme.css";
import { Box, TextField, Button, FormControl, FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { inputRoomState, roomState } from "../stores/chat";
import { useRecoilState } from "recoil";
import { useSetRoom } from "../api/createRoom";

const CreateRoom = () => {
  const [inputRoom, setInputRoom] = useRecoilState(inputRoomState);

  const handleCreateRoom = () => {
    if (inputRoom.trim() !== "") {
      useSetRoom(inputRoom);
      navigate("/chat-room");
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <FormControl>
        <FormLabel
          className={"tiltle"}
          sx={{
            fontFamily: "Prompt",
            fontSize: "2.313rem",
            margin: "3rem 0 .75rem 0",
            color: "#383838",
          }}
        >
          สร้างห้องใหม่
        </FormLabel>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={inputRoom}
          onChange={(e) => setInputRoom(e.target.value)}
          sx={{
            "& input": {
              textAlign: "center",
              fontSize: "2rem",
              color: "#383838",
              fontFamily: "Prompt",
            },
            width: "20rem",
            margin: "2rem 0 2rem 0",
          }}
        />
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Button
            variant="text"
            onClick={(e) => {
              navigate("/room");
            }}
            sx={{
              color: "#4e4e4e",
              fontSize: "1.688rem",
              background: "#ffffff",
              "&:hover": {
                color: "#b91216",
                background: "#ffffff",
              },
            }}
          >
            กลับ
          </Button>
          <Button
            variant="contained"
            onClick={(e) => handleCreateRoom()}
            sx={{
              fontFamily: "Prompt",
              color: "#ffffff",
              fontSize: "1.688rem",
              background:
                "radial-gradient(ellipse farthest-corner at top left, #c41417 0%, #b31315 100%)",
            }}
          >
            ยืนยัน
          </Button>
        </Box>
      </FormControl>
    </>
  );
};

export default CreateRoom;
