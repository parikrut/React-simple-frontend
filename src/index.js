import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
// Global is from style-component, for setting up global css.
import Global from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
