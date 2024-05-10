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

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const { data: session, status } = useSession();

  if (status === "authenticated") {
    router.push("/about");
  } else if (status == "loading") {
    return <Loader />;
  } else {
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
