import "../assets/css/theme.css";
import React from "react";
import { TextField, Button, FormControl, FormLabel } from "@mui/material";
import { senderState, inputSenderState } from "../stores/chat";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useGetMessage } from "../api/messages";

const Sender = () => {
  const [inputSender, setInputSender] = useRecoilState(inputSenderState);
  const [sender, setSender] = useRecoilState(senderState);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputSender.trim() !== "") {
      navigate("/room");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            ชื่อของคุณ
          </FormLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={inputSender}
            onChange={(e) => setInputSender(e.target.value)}
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
          <Button
            variant="contained"
            type="submit"
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
        </FormControl>
      </form>
    </>
  );
};

export default Sender;
