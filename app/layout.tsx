"use client";

import { Rubik } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { NextAuthProvider } from "./providers";
import Navbar from "@/components/shared/Navbar";
import { useState } from "react";
import Header from "@/components/LandingPage/Header";
import AppHeader from "@/components/LandingAstro/AppHeader";
import Container from "@/components/LandingAstro/Container";

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
            appearance={!theme ? "dark" : "light"}
            radius={"full"}
            accentColor={"purple"}
          >
            <Navbar changeTheme={changeTheme} theme={theme} />
            
            <Container>
              <div className="relative h-full w-full bg-slate-950 ">
                <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
              </div>
            </Container>

            {/**<AppHeader changeTheme={changeTheme} theme={theme} />*/}
            {children}
          </Theme>
        </NextAuthProvider>
      </body>
    </html>
  );
}


