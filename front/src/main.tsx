import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router/index.tsx";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
