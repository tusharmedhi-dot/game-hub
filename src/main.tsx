import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes"; // Usually used with v3 for color mode

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 2. You MUST pass the 'value' prop to ChakraProvider in v3 */}
    <ChakraProvider value={defaultSystem}>
      {/* 3. Wrap in ThemeProvider (from next-themes) to support color modes */}
      <ThemeProvider attribute="class">
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>
);
