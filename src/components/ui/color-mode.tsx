"use client";

import type { IconButtonProps, TextProps } from "@chakra-ui/react";
// Note: ClientOnly is defined locally below
import { IconButton, Skeleton, Text } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

// --- FIX 1: Local Definition of ClientOnly ---
const { useState, useEffect } = React;

export interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Component to ensure code only runs after hydration
export function ClientOnly(props: ClientOnlyProps) {
  const { children, fallback } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}
// ---------------------------------------------

export interface ColorModeProviderProps extends ThemeProviderProps {}

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = forcedTheme || resolvedTheme;
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return {
    colorMode: colorMode as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="9" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  );
});

// FIX 2 & 3: Changed Span to Text and removed leaky props (colorPalette, colorScheme)
export const LightMode = React.forwardRef<HTMLParagraphElement, TextProps>(
  function LightMode(props, ref) {
    return (
      <Text
        color="fg"
        display="contents"
        className="chakra-theme light"
        // REMOVED: colorPalette="gray" and colorScheme="light" to stop prop leakage
        ref={ref}
        {...props}
      />
    );
  }
);

// FIX 2 & 3: Changed Span to Text and removed leaky props (colorPalette, colorScheme)
export const DarkMode = React.forwardRef<HTMLParagraphElement, TextProps>(
  function DarkMode(props, ref) {
    return (
      <Text
        color="fg"
        display="contents"
        className="chakra-theme dark"
        // REMOVED: colorPalette="gray" and colorScheme="dark" to stop prop leakage
        ref={ref}
        {...props}
      />
    );
  }
);
