import { getDictionary } from "@/lib/dictionary";
import Player from "../components/player/Player";
import NavbarProvider from "@/providers/NavbarProvider";
import Content from "./Content";
import Footer from "../components/footer/Footer";

export default async function Home({ params : {lang} }: {params: {lang: "pl" | "en"}}) {
  const { page } = await getDictionary(lang)

  return (
    <div className='w-full'>
      <div className='lg:block hidden'>
        <Player />
      </div>
      <NavbarProvider>
        <Content
          page={page}
        />
      </NavbarProvider>
      <Footer />
    </div>
  );
}
