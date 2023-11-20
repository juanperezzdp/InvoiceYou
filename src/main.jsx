import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import { FloatingProvider } from "./Context/ContextComponents";
import { router } from "./routers/Routers";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FloatingProvider>
      <RouterProvider router={router} />
    </FloatingProvider>
  </React.StrictMode>
);
