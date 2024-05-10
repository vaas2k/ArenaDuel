"use client";
import CalltoAction from "@/components/LandingPage/CalltoAction";
import Clients from "@/components/LandingPage/Clients";
import Commitment from "@/components/LandingPage/Commitment";
import Community from "@/components/LandingPage/Community";
import Discover from "@/components/LandingPage/Discover";
import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import Loader from "@/components/shared/Loader";
import { useSession } from "next-auth/react";
import { Rubik } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const rubik = Rubik({ subsets: ["latin"] });

export default function ClientHome() {
  
  const router = useRouter();
  const [ isMounted , setIsMounted ] = useState(false);
  const { data: session, status } = useSession();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Loader />;

  if (status === "authenticated") {
    router.push("/about");
    return <Loader />
  }
  else if(status === 'loading'){
    return <Loader />
  } 
  else {
    return (
      <div className={rubik.className}>
        <Hero />
        <Discover />
        <Commitment />
        <Community />
        <Clients />
        <CalltoAction />
        <Footer />
      </div>
    );
  }
}

