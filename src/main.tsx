import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import theme from "./assets/theme";
import { Provider } from "@/components/ui/provider";
//import { defaultSystem } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
