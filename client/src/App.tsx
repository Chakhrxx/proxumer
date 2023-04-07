import "./App.css";
import Sender from "./page/Sender";
import Room from "./page/Room";
import CreateRoom from "./page/CreateRoom";
import JoinRoom from "./page/JoinRoom";
import proxumer from "./assets/images/logo.png";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "@mui/material";
import { publicRoutes } from "./router";

const App = () => {
  return (
    <>
      <div className="mb-2">
        <img src={proxumer} alt="Proxumer" />
      </div>
      <Container
        sx={{
          marginTop: "2rem",
          background: "#ffffff",
          boxShadow: 2,
          borderRadius: "1.25rem",
          height: "90vh",
        }}
      >
        <RouterProvider router={createBrowserRouter([...publicRoutes])} />
      </Container>
    </>
  );
};

export default App;
