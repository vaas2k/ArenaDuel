"use client";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { NextAuthProvider } from "./providers";
import Navbar from "@/components/shared/Navbar";
import { useState } from "react";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  const theme = typeof window !== undefined ? window.sessionStorage.getItem('theme') : null;
  
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NextAuthProvider>
          <Theme
            appearance={theme == 'true' ? 'light' : 'dark'}
            radius={"full"}
            accentColor={"blue"}
          >
          <Navbar  />
            {children}
          </Theme>
        </NextAuthProvider>
      </body>
    </html>
  );
}


