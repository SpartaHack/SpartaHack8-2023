"use client";
import "./globals.css";
import { ThemeProviders } from "@/providers/theme-providers";
import { Toaster } from "sonner";
import { Roboto } from "next/font/google";
import ErrorModal from "@/helpers/error-modal";
import { constructMetadata } from "@/functions/metadata";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProviders>
          <Toaster richColors />
          <ErrorModal />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
