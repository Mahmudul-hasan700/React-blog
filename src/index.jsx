// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, useTheme } from "./ThemeContext.jsx";

const Root = () => {
  const { isDarkMode } = useTheme();

  return (
    <React.StrictMode>
      <body className={isDarkMode ? "dark" : "light"}>
        <App />
      </body>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>,
);
