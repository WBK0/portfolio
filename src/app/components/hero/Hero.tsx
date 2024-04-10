"use client";
import Image from "next/image";
import myimage from "./myimage.jpg";
import { NavbarContext } from "@/providers/NavbarProvider";
import { useContext } from "react";
import { Internationalization } from "@/types/internationalization.types";

const Hero = ({ text } : { text: Internationalization['hero'] }) => {
  const { aboutMeRef, mySkillsRef } = useContext(NavbarContext);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='lg:mt-[-60vh] h-screen flex items-center'>
      <div className="w-full h-full flex justify-center gap-8 lg:gap-20 flex-col lg:flex-row h-screen lg:h-fit items-center">
        <div className="flex justify-center w-full lg:w-fit">
          <Image src={myimage} alt="My profile" className="rounded-full w-64 md:w-96" />
        </div>
        <div className="flex flex-col justify-center lg:w-min xl:w-fit">
          <h1
            className="font-black text-3xl sm:text-4xl lg:text-6xl text-center lg:text-start"
          >
            JUNIOR FRONTEND 
            <span className="block text-red lg:mt-2">DEVELOPER</span>
          </h1>
          <div className="mt-12 flex gap-2 lg:gap-6 flex-col lg:flex-row items-center">
            <button
              className="bg-red text-white px-16 py-3 rounded-full font-bold hover:bg-redHover w-fit"
              type="button"
              onClick={() => scrollToRef(aboutMeRef)}
            >
              {text.about}
            </button>
            <button
              className="bg-zinc-200 text-black px-16 py-3 rounded-full font-bold hover:bg-zinc-300 w-fit"
              type="button"
              onClick={() => scrollToRef(mySkillsRef)}
            >
              {text.skills}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;