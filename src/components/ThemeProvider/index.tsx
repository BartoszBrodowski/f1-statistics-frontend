"use client";
import * as React from "react";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function CustomThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ThemeProvider {...props}>
      <Theme>{children}</Theme>
    </ThemeProvider>
  );
}
