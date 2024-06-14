"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Rubik } from "next/font/google";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/shared/Loader";

// Dynamically import components that may access the DOM
const CalltoAction = dynamic(() => import("@/components/LandingPage/CalltoAction"), { ssr: false });
const Clients = dynamic(() => import("@/components/LandingPage/Clients"), { ssr: false });
const Commitment = dynamic(() => import("@/components/LandingPage/Commitment"), { ssr: false });
const Community = dynamic(() => import("@/components/LandingPage/Community"), { ssr: false });
const Discover = dynamic(() => import("@/components/LandingPage/Discover"), { ssr: false });
const Footer = dynamic(() => import("@/components/LandingPage/Footer"), { ssr: false });
const Hero = dynamic(() => import("@/components/LandingPage/Hero"), { ssr: false });

const rubik = Rubik({ subsets: ["latin"] });

export default function ClientHome() {
  const [isMounted, setIsMounted] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Loader />;
  if (status === 'loading') return <Loader />;

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
