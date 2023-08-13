import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import App from "./App";
import { FloatingProvider } from "./Context/ContextComponents";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FloatingProvider>
      <App />
    </FloatingProvider>
  </React.StrictMode>
);
