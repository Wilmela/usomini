"use client";

import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText);

const Landing = () => {
  useGSAP(() => {
    if (typeof window !== "undefined") return;
    
      const texts = gsap.utils.toArray<HTMLElement>("#h1");

    texts.forEach((text) => {
      const split = new SplitText(text, { type: "chars, words" });
      gsap.from(split.chars, {
        yPercent: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power1.inOut",
      });
    });

    const split = new SplitText("#h3", { type: " words" });
    gsap.from(split.words, {
      yPercent: 100,

      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      delay: 0.7,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      "#btn",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.7,
        ease: "expo.out",
      },
    );

    // gsap.fromTo(
    //   "#s",
    //   {
    //     rotateZ: 40,
    //   },
    //   {
    //     rotateZ: -40,
    //     duration: 0.1,
    //     ease: "circ.in",
    //     repeat: -1,
    //     yoyo: true,
    //   },
    // );
  }, []);

  return (
    <div className="relative h-162.5w-full">
      <Image
        src={"/assets/images/bg.jpg"}
        fill
        alt="bg"
        className="z-0"
        loading="eager"
        sizes="100vw"
      />

      <MaxWidthWrapper className="flex flex-col items-center justify-center md:space-y-6">
        <div className="z-20 flex flex-col items-end">
          <h4 className="capitalize z-20 font-light text-white">
            The Golden Heartland
          </h4>

          <div className="z-20 flex flex-col items-center">
            <h1 id="h1" className="headingText flex z-20 mb-8 md:mb-12">
              U
              <span className="border-green-900 border-4 -rotate-z-20 mx-4 px-2 hover:rotate-z-20 transition duration-500 hover:animate-slide-down">
                S
              </span>
              OMINI
            </h1>
            <h3 className="subtitle z-20 text-center" id="h3">
              Where nature&apos;s bounty flows as freely as <br /> our welcome
            </h3>
            <p className="text-white text-sm mt-8">-since 1940-</p>
          </div>
        </div>
        <Link href={"#feature"} className="z-10" id="btn">
          <Button
            variant={"default"}
            className="text-white font-bold text-xl p-6 bg-green-800 hover:bg-green-900 mt-10 w-75 cursor-pointer transition duration-300 transform hover:-rotate-z-1  hover:shadow-shinny"
          >
            EXPLORE
          </Button>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default Landing;
