import { useContext } from "react";
import { NavbarContext } from "@/providers/NavbarProvider";
import { usePathname, useRouter } from "next/navigation";
import { Internationalization } from "@/types/internationalization.types";

const ResponsiveMenu = ({ handleMenu, text } : { handleMenu: () => void, text: Internationalization['navigation'] }) => {
  const { aboutMeRef, mySkillsRef, projectsRef, contactRef, actualPage } = useContext(NavbarContext);
  const pathname = usePathname();

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  const router = useRouter();

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {    
    router.push(`/${e.target.value}`, { scroll: false })
  }

  return (
    <div className="absolute w-full h-screen left-0 top-0 bg-black/25 md:hidden">
      <div className="bg-white h-screen max-w-sm drop-shadow-xl mr-16 flex flex-wrap flex-col">
        <div className="flex justify-end items-center pt-4 px-5">  
          <div onClick={() => handleMenu()}>
            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>            
      </div>
      <div className="flex flex-wrap pt-8 px-4">
        <div 
          className="px-6 rounded-full cursor-pointer font-medium text-normal w-full h-12" 
          onClick={() => scrollToRef(aboutMeRef)}
        >
          <p
            className={`${actualPage === "aboutMe" ? 'border-b-3' : ''} border-red py-1 w-fit text-xl`}
          >
            {text.about}
          </p>
        </div>
        <div 
          className="px-6 rounded-full cursor-pointer font-medium text-normal w-full h-12"
          onClick={() => scrollToRef(mySkillsRef)}
        >
          <p
            className={`${actualPage === "skills" ? 'border-b-3' : ''} border-red py-1 w-fit text-xl`}
          >
            {text.skills}
          </p>
        </div>
        <div 
          className="px-6 rounded-full cursor-pointer font-medium text-normal w-full h-12"
          onClick={() => scrollToRef(projectsRef)}  
        >
          <p
            className={`${actualPage === "projects" ? 'border-b-3' : ''} border-red py-1 w-fit text-xl`}
          >
            {text.projects}
          </p>
        </div>
        <div 
          className="px-6 rounded-full cursor-pointer font-medium text-normal w-full h-12"
          onClick={() => scrollToRef(contactRef)}
        >
          <p
            className={`${actualPage === "contact" ? 'border-b-3' : ''} border-red py-1 w-fit text-xl`}
          >
            {text.contact}
          </p>
        </div>
      </div>
      <div className="mt-auto px-4 mb-9 font-bold">
        <div className="flex justify-center mb-4">
          <select
            onChange={handleChangeLanguage}
            value={pathname.replace("/", "")}
            className="px-4 py-2 bg-zinc-100 rounded-full cursor-pointer font-medium text-normal"
          >
            <option value="pl">PL</option>
            <option value="en">EN</option>
          </select>
        </div>
        
        <p
          className="text-center text-zinc-700 text-lg font-Chakra"
        >
          CODEBYBARTLOMIEJ
        </p>
      </div>
    </div>
  </div>
  )
}
export default ResponsiveMenu;