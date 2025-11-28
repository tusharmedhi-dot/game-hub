import React from "react";
import ReactDOM from "react-dom/client";
//import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
// import theme from "./assets/theme";
import { Provider } from "@/components/ui/provider";
//import { defaultSystem } from "@chakra-ui/react";
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode";

import { ColorModeIcon } from "@/components/ui/color-mode";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
