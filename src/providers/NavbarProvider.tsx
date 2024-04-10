"use client";
import React, { createContext, useRef, useState } from 'react';

export const NavbarContext = createContext({
  actualPage: "" as string,
  setActualPage: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  aboutMeRef: {} as React.RefObject<HTMLDivElement>,
  mySkillsRef: {} as React.RefObject<HTMLDivElement>,
  projectsRef: {} as React.RefObject<HTMLDivElement>,
  contactRef: {} as React.RefObject<HTMLDivElement>,
});

const NavbarProvider = ({ children } : { children: React.ReactNode}) => {
  const [actualPage, setActualPage] = useState<string>("aboutMe");
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const mySkillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  console.log(actualPage);

  return (
    <NavbarContext.Provider value={{
      actualPage,
      setActualPage,
      aboutMeRef,
      mySkillsRef,
      projectsRef,
      contactRef,
    }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;