'use client'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/shared/Navbar";
import { useSelector } from "react-redux";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const theme = useSelector( (state : any) => { return state.themeReducer.theme} ) ;

  return <>
        <Theme
              appearance={theme}
              radius={"large"}
              accentColor={"blue"}
            >
        <Navbar />
         {children}
        </Theme>
  </>;
}
