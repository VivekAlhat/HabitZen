import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import ToastProvider from "./context/ToastContext";
import UserProvider from "./context/UserContext.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";

import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ToastProvider>
          <UserProvider>
            <DropdownPrimitive.Root>
              <App />
            </DropdownPrimitive.Root>
          </UserProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
