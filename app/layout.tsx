"use client";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { NextAuthProvider } from "./providers";
import Navbar from "@/components/shared/Navbar";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/storeRedux/store";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<any>("false");
  useEffect(() => {
    const newtheme =
      typeof window !== undefined ? sessionStorage.getItem("theme") : null;
    setTheme(newtheme);
  });

  return (
    <html lang="en">
      <body className={rubik.className}>
        <NextAuthProvider>
          <Provider store={store}>
            <Theme
              appearance={theme == "true" ? "light" : "dark"}
              radius={"large"}
              accentColor={"blue"}
            >
              <Navbar />
              <Toaster />
              {children}
            </Theme>
          </Provider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
