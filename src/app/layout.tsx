// Nextjs
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Barlow,
  Montserrat,
} from "next/font/google";

// clerk
import {
  ClerkProvider,

} from '@clerk/nextjs'

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

const montserratFont = Montserrat({
  variable: "--font-montserrat", // Updated variable name
  subsets: ["latin"],
  weight: ["400"], // Keep weight 400, adjust if needed
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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSansFont.variable} ${geistMonoFont.variable} ${barlowFont.variable} ${montserratFont.variable} antialiased`}
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
    </ClerkProvider>
  );
}
