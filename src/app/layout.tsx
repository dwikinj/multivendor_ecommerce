// Nextjs
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Barlow,
  Montserrat_Underline,
} from "next/font/google";

// Global css
import "./globals.css";

// Theme
import { ThemeProvider } from "next-themes";

// Fonts
const geistSansFont = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMonoFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowFont = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserratUnderlineFont = Montserrat_Underline({
  variable: "--font-montserrat-underline",
  subsets: ["latin"],
  weight: ["400"],
});

// Metadata
export const metadata: Metadata = {
  title: "WeShop",
  description: "Welcome to WeShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSansFont.variable} ${geistMonoFont.variable} ${barlowFont.variable} ${montserratUnderlineFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
