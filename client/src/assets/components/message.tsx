import { Avatar } from "@mui/material";
import "../css/theme.css";
import doge from "../images/dogecoin.jpg";

export const MessageRight = (props: { message: string }) => {
  const message = props.message ? props.message : "no message";
  return (
    <div>
      <div className={`messageRowRight`}>
        <div>
          <div className={`messageOrange`}>
            <div>
              <p className={`messageContent`}>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MessageLeft = (props: { message: string; displayName: any }) => {
  const message = props.message ? props.message : "no message";
  const displayName = props.displayName ? props.displayName : "名無しさん";
  return (
    <>
      <div className={`messageRow`}>
        <Avatar alt={displayName} className={`orange`} src={doge}></Avatar>
        <div>
          <div className={`displayName`}>{displayName}</div>
          <div className={`messageBlue`}>
            <div>
              <p className={`messageContent`}>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
