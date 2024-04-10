"use client";
import Image from "next/image";
import quizyme from "./img/quizyme-macbook.png";
import trycrypto from "./img/trycrypto-macbook.png";
import gptprompts from "./img/gptprompts-macbook.png";
import github from "./img/github.svg";
import { useContext, useEffect } from "react";
import { NavbarContext } from "@/providers/NavbarProvider";
import { Internationalization } from "@/types/internationalization.types";

const Projects = ({ text } : { text: Internationalization['projects'] }) => {
  const { projectsRef, setActualPage } = useContext(NavbarContext);

  useEffect(() => {
    const observerTop = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActualPage("projects");
        }
      });
    }, { threshold: 0.35 });
  
    const observerBottom = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActualPage("projects");
        }
      });
    }, { threshold: 0.35 });
  
    if (projectsRef.current) {
      const firstChild = projectsRef.current.firstChild as Element | null;
      const lastChild = projectsRef.current.lastChild as Element | null;
  
      if (firstChild) {
        observerTop.observe(firstChild);
      }
  
      if (lastChild) {
        observerBottom.observe(lastChild);
      }
    }
  
    return () => {
      observerTop.disconnect();
      observerBottom.disconnect();
    };
  }, [projectsRef.current]);

  return (
    <div className="px-3 pt-20 mt-0 md:mt-44" ref={projectsRef}>
      <div className="max-w-2xl mx-auto" data-aos="fade-up">
        <h2 className="font-black pb-1 text-3xl sm:text-6xl mx-auto border-b-4 border-red w-fit">{text.title}</h2>
        <p
          className="text-normal pt-8 text-center text-zinc-700 font-semibold"
        >
          {text.content}
        </p>
      </div>
      <div className="pt-20 md:pt-40 flex flex-col gap-32">
        <div className="flex flex-wrap lg:justify-between gap-8 lg:gap-16" data-aos="fade-up">
          <div className="lg:flex-1 flex items-center">
            <Image 
              src={quizyme}
              alt="Quizyme on MacBook"
            />
          </div>
          <div className="lg:flex-1 flex flex-col justify-center">
            <h3
              className="font-black text-4xl text-black pb-4 text-center"
            >
              {text.quizyme.title}
            </h3>
            <p
              className="font-semibold text-lg text-center text-zinc-700"
            >
              {text.quizyme.content}
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8 w-full">
              <a
                className="bg-red text-white w-48 py-3 rounded-full font-bold hover:bg-redHover flex items-center justify-center"
                href="https://github.com/WBK0/quizyme"
                target="_blank"
              >
                <Image src={github} alt="GitHub" className="w-5 h-5 inline-block mr-2" />
                {text.buttons.github} 
              </a>
              <a
                className="bg-red text-white w-48 py-3 rounded-full font-bold hover:bg-redHove flex items-center justify-center"
                href="https://quizyme.codebybartlomiej.pl"
                target="_blank"
              >
                {text.buttons.demo}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:justify-between gap-8 lg:gap-16" data-aos="fade-up">
          <div className="lg:flex-1 flex flex-col justify-center order-2 lg:order-1">
            <h3
              className="font-black text-4xl text-black pb-4 text-center"
            >
              {text.trycrypto.title}
            </h3>
            <p
              className="font-semibold text-lg text-center text-zinc-700"
            >
              {text.trycrypto.content}
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a
                className="bg-red text-white w-48 py-3 rounded-full font-bold hover:bg-redHover flex items-center justify-center"
                href="https://github.com/WBK0/trycrypto-frontend"
                target="_blank"
              >
                <Image src={github} alt="GitHub" className="w-5 h-5 inline-block mr-2" />
                {text.buttons.github} 
              </a>
              <a
                className="bg-red text-white w-48 py-3 rounded-full font-bold hover:bg-redHover flex items-center justify-center"
                href="https://trycrypto.codebybartlomiej.pl"
                target="_blank"
              >
                {text.buttons.demo}
              </a>
            </div>
          </div>
          <div className="lg:flex-1 flex items-center order-1 lg:order-2">
            <Image 
              src={trycrypto}
              alt="Trycrypto on MacBook"
            />
          </div>
        </div>
        <div className="flex flex-wrap lg:justify-between gap-8 lg:gap-16" data-aos="fade-up">
          <div className="lg:flex-1 flex items-center">
            <Image 
              src={gptprompts}
              alt="Gptprompts on MacBook"
            />
          </div>
          <div className="lg:flex-1 flex flex-col justify-center">
            <h3
              className="font-black text-4xl text-black pb-4 text-center"
            >
              {text.gptprompts.title}
            </h3>
            <p
              className="font-semibold text-lg text-center text-zinc-700"
            >
              {text.gptprompts.content}
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a
                className="bg-red text-white w-48 py-3 rounded-full font-bold hover:bg-redHover flex items-center justify-center"
                href="https://github.com/WBK0/gpt-prompts-app"
                target="_blank"
              >
                <Image src={github} alt="GitHub" className="w-5 h-5 inline-block mr-2" />
                {text.buttons.github} 
              </a>
              <a
                className="bg-red text-white w-48 py-3 rounded-full font-bold hover:bg-redHover flex items-center justify-center"
                href="https://gptprompts.codebybartlomiej.pl"
                target="_blank"
              >
                {text.buttons.demo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;