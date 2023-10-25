import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import { FloatingProvider } from "./Context/ContextComponents";
import { router } from "./routers/Routers";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Context/authcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FloatingProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </FloatingProvider>
  </React.StrictMode>
);
