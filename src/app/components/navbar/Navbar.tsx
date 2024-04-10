"use client";

import { useContext, useState } from "react";
import { NavbarContext } from "@/providers/NavbarProvider";
import ResponsiveMenu from "./ResponsiveMenu";
import { Internationalization } from "@/types/internationalization.types";

const Navbar = ({ text } : { text: Internationalization['navigation'] }) => {
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const { aboutMeRef, mySkillsRef, projectsRef, contactRef, actualPage } = useContext(NavbarContext);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  const handleResponsiveMenu = () => {
    setResponsiveMenu(!responsiveMenu);
  }

  return (
    <div className="px-3 fixed w-full bg-transparent z-10 top-0 left-0">
    <div className="flex mx-auto h-16 items-center">
      <div className="flex-1">
      </div>
      <div className="flex-2">
        <div className="bg-zinc-100 rounded-full px-6 hidden md:flex">
          <div 
            className="px-6 hover:bg-zinc-200 rounded-full cursor-pointer font-medium text-normal duration-150" 
            onClick={() => scrollToRef(aboutMeRef)}
          >
            <p
              className={`${actualPage === "aboutMe" ? 'border-b-3' : ''} border-red py-1`}
            >
              {text.about}
            </p>
          </div>
          <div 
            className="px-6 hover:bg-zinc-200 rounded-full cursor-pointer font-medium text-normal"
            onClick={() => scrollToRef(mySkillsRef)}
          >
            <p
              className={`${actualPage === "skills" ? 'border-b-3' : ''} border-red py-1`}
            >
              {text.skills}
            </p>
          </div>
          <div 
            className="px-6 hover:bg-zinc-200 rounded-full cursor-pointer font-medium text-normal"
            onClick={() => scrollToRef(projectsRef)}  
          >
            <p
              className={`${actualPage === "projects" ? 'border-b-3' : ''} border-red py-1`}
            >
              {text.projects}
            </p>
          </div>
          <div 
            className="px-6 hover:bg-zinc-200 rounded-full cursor-pointer font-medium text-normal"
            onClick={() => scrollToRef(contactRef)}
          >
            <p
              className={`${actualPage === "contact" ? 'border-b-3' : ''} border-red py-1`}
            >
              {text.contact}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-end md:hidden z-20">
          <button
            type="button"
            onClick={handleResponsiveMenu}
          >
            <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    {
      responsiveMenu && (
        <ResponsiveMenu 
          handleMenu={handleResponsiveMenu}
        />
      )
    }
  </div>
  )
}

export default Navbar;