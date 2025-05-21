import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  MantineProvider,
  createTheme,
  defaultCssVariablesResolver,
} from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "sans-serif",
  components: {
    Headers: {},
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      cssVariablesResolver={defaultCssVariablesResolver}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
