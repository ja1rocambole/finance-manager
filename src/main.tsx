import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/theme.ts";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
