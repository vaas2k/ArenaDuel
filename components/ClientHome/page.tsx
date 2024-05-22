"use client";

import CalltoAction from "@/components/LandingPage/CalltoAction";
import Clients from "@/components/LandingPage/Clients";
import Commitment from "@/components/LandingPage/Commitment";
import Community from "@/components/LandingPage/Community";
import Discover from "@/components/LandingPage/Discover";
import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import { Loader } from "@/components/shared/Loader";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Rubik } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const rubik = Rubik({ subsets: ["latin"] });

export default function ClientHome() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  

  if (!isMounted) return <Loader />;

  else if(status === 'loading'){
    return <Loader />
  } 
  else {
    const getUserData = async (email: string) => {
      try {
        const { data } = await axios.get(`/api/profile/${email}`);
        if (data.status === 200) {
          typeof window !== undefined ? window.sessionStorage.setItem('user', JSON.stringify(data.data)) : null;
          console.log(data.data);
        } else {
          console.error(data.msg);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
      if (status === 'authenticated' && session?.user?.email) {
        getUserData(session.user.email);
      }

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