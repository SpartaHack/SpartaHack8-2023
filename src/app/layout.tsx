import type { Metadata } from "next";
import "./globals.css";
import { ThemeProviders } from "@/providers/theme-providers";
import { Toaster } from "sonner";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "YouLearn - AI companion for learning",
  description:
    "YouLearn is reimagining the future of learning by building AI software for students, teachers, and communities to democratize quality education worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </head>
      <body className={roboto.className}>
        <ThemeProviders>
          <Toaster richColors />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
