"use client";
import Image from "next/image"
import javascript from "./logos/javascript.png"
import typescript from "./logos/typescript.png"
import react from "./logos/react.png"
import nextjs from "./logos/nextjs.png"
import bootstrap from "./logos/bootstrap.png"
import css from "./logos/css.png"
import figma from "./logos/figma.png"
import github from "./logos/github.png"
import html from "./logos/html.png"
import nodejs from "./logos/nodejs.png"
import php from "./logos/php.png"
import postgres from "./logos/postgres.png"
import python from "./logos/python.png"
import tailwind from "./logos/tailwind.png"
import vscode from "./logos/vscode.png"
import webpack from "./logos/webpack.png"
import wordpress from "./logos/wordpress.png"
import mongodb from "./logos/mongodb.png"
import { useContext, useEffect } from "react"
import { NavbarContext } from "@/providers/NavbarProvider"
import { Internationalization } from "@/types/internationalization.types";

const skills = [
  {
    image: html,
    title: "HTML",
  },
  {
    image: css,
    title: "CSS",
  },
  {
    image: javascript,
    title: "JavaScript",
  },
  {
    image: typescript,
    title: "TypeScript",
  },
  {
    image: react,
    title: "React",
  },
  {
    image: nextjs,
    title: "Next.js",
  },
  {
    image: tailwind,
    title: "Tailwind CSS",
  },
  {
    image: php,
    title: "PHP",
  },
  {
    image: python,
    title: "Python",
  },
  {
    image: nodejs,
    title: "Node.js",
  },
  {
    image: postgres,
    title: "PostgreSQL",
  },
  {
    image: mongodb,
    title: "MongoDB",
  },
  {
    image: figma,
    title: "Figma",
  },
  {
    image: github,
    title: "GitHub",
  },
  {
    image: vscode,
    title: "VS Code",
  },
  {
    image: wordpress,
    title: "WordPress",
  },
]

const MySkills = ({ text } : { text: Internationalization['skills'] }) => {
  const { mySkillsRef, setActualPage } = useContext(NavbarContext);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActualPage("skills");
        }
      });
    }, {
      rootMargin: "0px",
      threshold: 0.35,
    });

    if(mySkillsRef.current) observer.observe(mySkillsRef.current);

    return () => {
      if(mySkillsRef.current) observer.unobserve(mySkillsRef.current);
    }
  }, [mySkillsRef.current])

  return (
    <div className="mt-0 md:mt-44 pt-20 px-3 flex justify-center flex-col" ref={mySkillsRef}>
      <div className="max-w-2xl mx-auto" data-aos="fade-up">
        <h2 className="font-black pb-1 text-3xl sm:text-6xl mx-auto border-b-4 border-red w-fit">{text.title}</h2>
        <p
          className="text-normal pt-8 text-center text-zinc-700 font-semibold"
        >
          {text.content}
        </p>
      </div>
      <div className="max-w-2xl mx-auto pt-16 flex flex-wrap gap-6 justify-center" data-aos="fade-up">
        {
          skills.map((value) => (
            <div className="group relative w-fit flex justify-center">
              <Image
                src={value.image}
                alt={value.title}
                width={64}
                height={64}
                quality={100}
                className="hover:scale-105 duration-300"
              />
              <span className="absolute top-[-35px] scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 w-max">{value.title}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MySkills;