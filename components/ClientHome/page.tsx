"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Rubik } from "next/font/google";
import { useSession } from "next-auth/react";
import { HeroHighlight, Highlight } from "../Landing/Hero"
import { motion } from "framer-motion";
import { HoverBorderGradient } from "../Landing/BorderButton";
import { BackgroundBeams } from "../ui/background-beams";
import Image from "next/image";
import { Badge } from "@radix-ui/themes";
import Link from "next/link";

// Dynamically import components that may access the DOM
// const CalltoAction = dynamic(() => import("@/components/LandingPage/CalltoAction"), { ssr: false });
// const Clients = dynamic(() => import("@/components/LandingPage/Clients"), { ssr: false });
// const Commitment = dynamic(() => import("@/components/LandingPage/Commitment"), { ssr: false });
// const Community = dynamic(() => import("@/components/LandingPage/Community"), { ssr: false });
// const Discover = dynamic(() => import("@/components/LandingPage/Discover"), { ssr: false });
// const Footer = dynamic(() => import("@/components/LandingPage/Footer"), { ssr: false });
// const Hero = dynamic(() => import("@/components/LandingPage/Hero"), { ssr: false });
const Loader = dynamic(() => import("@/components/shared/Loader"), { ssr: false, });

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
    <>
      <BackgroundBeams />
      <div className={`${rubik.className} pt-[100px]`}>

        {/**HERO SECTION */}
        <div className="hero-section h-[620px]">

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl sm:mt-[100px] mt-[30px] lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Your Ultimate Coding Battle Arena
            offers{" "}
            <Highlight className="text-black dark:text-white">
              Duel 1v1 and Marathon.
            </Highlight>
            <br />
            <p className="sm:text-[15px] text-[10px] mt-[20px]">In Duel 1v1, challenge peers in real-time head-to-head battles.</p>
            <p className="sm:text-[15px] text-[10px] ">In Marathon, complete the most problems within the given time.</p>
            <Link href={'/dashboard'}>
            <div className="flex items-center justify-center mt-[40px]"><HoverBorderGradient><p className="text-[22px]">Compete Now</p></HoverBorderGradient></div>
            </Link>
          </motion.h1>

        </div>


        {/**FEATURES SECTION */}
        <div className="flex flex-col gap-[20px] mt-[-200px] p-[50px]">
          <div className="flex">
            <Image
              src='/images/landing/1v1.png'
              width={600}
              height={600}
              alt=""
              className="rounded-lg"
            />
            <div className="flex flex-col items-center justify-center my-[80px] text-xl px-4 md:text-2xl sm:mt-[100px] mt-[30px] lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
              <p>Compete against your friends </p> <br/> <Highlight>  Climb Leaderboard </Highlight> </div>
          </div>

          <div className="flex">
            <div className="flex flex-col items-center justify-center my-[80px] text-xl px-4 md:text-2xl sm:mt-[100px] mt-[30px] lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
              <p>Real time Programming </p> <br/> <Highlight>  Elo Rating System </Highlight> </div>
            <Image
              src='/images/landing/win.png'
              width={600}
              height={600}
              alt=""
              className="rounded-lg"
            />
          </div>

          <div>

            <div className="flex flex-col items-center justify-center mt-[30px]">
              <div className="flex items-center justify-center my-[80px] text-xl px-4 md:text-2xl sm:mt-[100px] mt-[30px] lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"><p>Three Different Modes</p></div>
              <Image
                src='/images/landing/modes.png'
                width={1100}
                height={1100}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>

        </div>

        {/**TECH STACK USED*/}
        <div className="flex flex-col items-center justify-center my-[20px] text-xl px-4 md:text-2xl sm:mt-[100px] mt-[30px] lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
          Tech Stack Used </div>
        <div className="flex items-center justify-center  gap-[40px]">
          <img src="https://skillicons.dev/icons?i=ts" />
          <img src="https://skillicons.dev/icons?i=nextjs" />
          <img src="https://skillicons.dev/icons?i=redis" />
          <img src="https://skillicons.dev/icons?i=docker" />
        </div>


        {/**FOOTER*/}
        <footer className="bg-neutral-900 text-white py-6 mt-10">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 DevSuke. All rights reserved.</p>
            <p>
              <a href="/terms" className="text-white hover:underline mx-2">Terms of Service</a>
              |
              <a href="/privacy" className="text-white hover:underline mx-2">Privacy Policy</a>
            </p>
            <p className="mt-4">
              Follow us on
              <a href="https://twitter.com/VaaS2k" className="text-white hover:underline mx-2">Twitter</a>,
              <a href="https://facebook.com/yourcompany" className="text-white hover:underline mx-2">Facebook</a>, and
              <a href="https://instagram.com/salsuqe" className="text-white hover:underline mx-2">Instagram</a>.
            </p>
          </div>
        </footer>
      </div>
    </>
  );

}
