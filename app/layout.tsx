'use client'
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { NextAuthProvider } from "./providers";
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

  
  return (
    <html lang="en">
      <body className={rubik.className}>
          <Provider store={store}>
              <Toaster />
              {children}
          </Provider>
      </body>
    </html>
  );
}
