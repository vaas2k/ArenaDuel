import CalltoAction from "@/components/LandingPage/CalltoAction";
import Clients from "@/components/LandingPage/Clients";
import Commitment from "@/components/LandingPage/Commitment";
import Community from "@/components/LandingPage/Community";
import Discover from "@/components/LandingPage/Discover";
import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";



export default function Home() {
  
  return (
    <>
    <Hero />
    <Discover />
    <Commitment />
    <Community />
    <Clients />
    <CalltoAction />
    <Footer />
    </>
  );
}
