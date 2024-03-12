"use client"

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/globals";
import { defaultTheme } from "@/styles/themes/default";


export default function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}