"use client";

import { Rubik } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { NextAuthProvider } from "./providers";
import Navbar from "@/components/shared/Navbar";
import { useState } from "react";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  function changeTheme(theme: boolean) {
    setTheme(!theme);
  }

  const [theme, setTheme] = useState<boolean>(true);
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NextAuthProvider>
          <Theme
            appearance={theme  ? "dark" : "light"}
            radius={"full"}
            accentColor={"blue"}
          >
          <Navbar changeTheme={changeTheme} theme={theme} />
            {children}
          </Theme>
        </NextAuthProvider>
      </body>
    </html>
  );
}


