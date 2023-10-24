import { createBrowserRouter } from "react-router-dom";
import Login from "../sign/Login";
import Register from "../sign/Rigister";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/invoice",
    element: <App />,
  },
]);
