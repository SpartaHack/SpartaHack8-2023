"use client";
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function ThemeProviders({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}