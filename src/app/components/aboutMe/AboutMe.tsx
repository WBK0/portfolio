"use client";
import Image from "next/image";
import iphone from "./iphone.png";
import { useContext, useEffect } from "react";
import { NavbarContext } from "@/providers/NavbarProvider";
import { Internationalization } from "@/types/internationalization.types";

const AboutMe = ({ text } : { text: Internationalization['about'] }) => {
  const { aboutMeRef, setActualPage, contactRef } = useContext(NavbarContext);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActualPage("aboutMe");
        }
      });
    }, {
      rootMargin: "0px",
      threshold: 0.35,
    });

    if(aboutMeRef.current) observer.observe(aboutMeRef.current);

    return () => {
      if(aboutMeRef.current) observer.unobserve(aboutMeRef.current);
    }
  }, [aboutMeRef.current])

  return (
    <div className="flex justify-between gap-12 max-w-5xl mx-auto flex-col md:flex-row pt-20 mt-0 md:mt-44 px-3" ref={aboutMeRef}>
      <div className="flex-1 flex flex-col justify-center" data-aos="fade-up">
        <h2 className="font-black pb-2 text-2xl sm:text-6xl border-b-4 border-red w-fit mx-auto md:mx-0">{text.title}</h2>
        <p
          className="text-normal pt-8 text-center md:text-start text-zinc-700 font-semibold"
        >
          {text.content}
        </p>
        <button
          className="bg-red text-white px-16 py-3 rounded-full font-bold hover:bg-redHover w-fit mt-8 mx-auto md:mx-0"
          type="button"
          onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          {text.button}
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center" data-aos="fade-up">
        <div className="relative w-72">
          <video src="https://codebybartlomiej.pl/static/quizyme1.mp4" autoPlay preload="none" loop muted className="w-full border-transparent rounded-xl" style={{borderWidth: '13px 17px 14px 14px', borderRadius: '40px', objectFit: 'cover'}} />
          <Image src={iphone} alt="iPhone" className="top-0 left-0 w-full absolute" />
        </div>
      </div>   
    </div>
  )
}

export default AboutMe;