"use client";
import AppFooter from "@/components/LandingAstro/AppFooter";
import AppHeader from "@/components/LandingAstro/AppHeader";
import CallToAction from "@/components/LandingAstro/CallToAction";
import Container from "@/components/LandingAstro/Container";
import HeroSection from "@/components/LandingAstro/HeroSection";
import Testmonials from "@/components/LandingPage/Testmonials";
import Features from "@/components/LandingPage/Features";
import { useSession } from "next-auth/react";
import Footer from "@/components/LandingPage/Footer";
export default function Home() {
  const { data: session, status } = useSession();
  //const router = useRouter();
  //if(status === 'authenticated'){
  //  router.push(`/profile/${session.user?.name}`);
  // }

  return (
    <>
      <Container>
      
        <HeroSection />
        <Features />
        <Testmonials />
        {/**<Blog /> */} 
        <CallToAction />
        
      </Container>
      <Footer />
    </>
  );
}
