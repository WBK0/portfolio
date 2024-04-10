"use client";
import { useEffect } from "react";
import AboutMe from "../components/aboutMe/AbouteMe";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import MySkills from "../components/mySkills/MySkills";
import Projects from "../components/projects/Projects";
import AOS from 'aos';
import Navbar from "../components/navbar/Navbar";
import { Internationalization } from "@/types/internationalization.types";

const Content = ({ page } : { page: Internationalization }) => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 150 });
  }, [])

  return (
    <div className='container mx-auto'>
      <Navbar
        text={page.navigation}
      />
      <Hero 
        text={page.hero}
      />
      <AboutMe 
        text={page.about}
      />
      <MySkills
        text={page.skills}
      />
      <Projects 
        text={page.projects}
      />
      <Contact
        text={page.contact}
      />
    </div>
  )
}

export default Content;