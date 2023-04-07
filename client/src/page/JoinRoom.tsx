import "../assets/css/theme.css";
import { Box, TextField, Button, FormControl, FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { inputRoomState } from "../stores/chat";
import { useRecoilState } from "recoil";
import { useGetMessage } from "../api/messages";

interface MyObject {
  [key: string]: any;
}

const JoinRoom = () => {
  const [inputRoom, setInputRoom] = useRecoilState(inputRoomState);
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    const { data } = useGetMessage(inputRoom);
    if (data?.getRooms?.roomName) {
      setInputRoom(inputRoom);
      navigate("/chat-room");
    } else {
      alert(`${inputRoom} does not exits`);
    }
  };

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
          เข้าร่วมแชท
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
            onClick={() => navigate("/room")}
            sx={{
              color: "#4e4e4e",
              fontSize: "1.688rem",
              padding: "0 3rem 0 3rem",
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
            onClick={(e) => handleJoinRoom()}
            sx={{
              fontFamily: "Prompt",
              color: "#ffffff",
              fontSize: "1.688rem",
              background:
                "radial-gradient(ellipse farthest-corner at top left, #c41417 0%, #b31315 100%)",
            }}
          >
            เข้าร่วมแชท
          </Button>
        </Box>
      </FormControl>
    </>
  );
};

export default JoinRoom;
