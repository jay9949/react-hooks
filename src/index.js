import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import AuthContextProvider from "./context/auth-context";

const container = document.getElementById("root");
const Main = createRoot(container);

Main.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
