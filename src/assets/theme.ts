// theme.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";

const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          100: { value: "#f7fafc" },
          900: { value: "#1a202c" },
        },
      },
    },
  },
});

export default customTheme;
