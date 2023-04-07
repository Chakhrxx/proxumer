import { inputSenderState } from "../stores/chat";
import { useRecoilState } from "recoil";
import { Button, FormControl, FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const [inputSender] = useRecoilState(inputSenderState);
  const navigate = useNavigate();
  return (
    <>
      <FormControl>
        <FormLabel
          className={"tiltle"}
          sx={{
            fontSize: "2.313rem",
            margin: "3rem 0 .75rem 0",
            color: "#383838",
          }}
        >
          คุณ {inputSender}
        </FormLabel>
        <Button
          variant="contained"
          onClick={(e) => navigate("/create-room")}
          sx={{
            margin: "2rem 0 2rem 0",
            color: "#ffffff",
            fontSize: "1.688rem",
            background:
              "radial-gradient(ellipse farthest-corner at top left, #c41417 0%, #b31315 100%)",
          }}
        >
          สร้างห้องใหม่
        </Button>
        <Button
          variant="text"
          onClick={(e) => navigate("/join-room")}
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
          เข้าร่วมแชท
        </Button>
      </FormControl>
    </>
  );
};

export default Room;
