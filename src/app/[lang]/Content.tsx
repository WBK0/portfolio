"use client";
import { useEffect, useState } from "react";
import AboutMe from "../components/aboutMe/AboutMe";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import MySkills from "../components/mySkills/MySkills";
import Projects from "../components/projects/Projects";
import AOS from 'aos';
import Navbar from "../components/navbar/Navbar";
import { Internationalization } from "@/types/internationalization.types";

const Content = ({ page } : { page: Internationalization }) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 150 });
  }, [])
  
  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
      document.body.style.overflow = 'visible';
    };

    document.body.style.overflow = 'hidden';

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);

      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

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
      {
        loading && (
          <div className="flex fixed top-0 left-0 h-screen w-full justify-center items-center bg-black z-50">
            <div
              className={`inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Content;