"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Player = () => {
  const divRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  // const [loadedCount, setLoadedCount] = useState(0);

  // useEffect(() => {
  //   if(loading === null){
  //     setTimeout(() => {
  //       setLoading(true)
  //     }, 500)
  //   }
  // }, [])

  // useEffect(() => {
  //   if(loadedCount >= 81){
  //     setLoading(false);
  //   }
  // }, [loadedCount])

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setLoading(false);

      if(!containerRef.current) return;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      setScrollTop(rect.top * 100 / (windowHeight - rect.height))
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [pathname])

  useEffect(() => {
    if(!containerRef.current) return;

    const handleScroll = () => {
      const element = containerRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setScrollTop(rect.top * 100 / (windowHeight - rect.height))
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef.current, loading])

  const [frameIndex, setFrameIndex] = useState(0)
  const images = useRef<HTMLImageElement[]>([]);
  
  const preloadImages = () => {
    for (let i = 0; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      // img.onload = () => {
      //   setLoadedCount(prevCount => prevCount + 1);
      // };
      images.current[i] = img;
    }
  };

  const currentFrame = (index : number) => (
    `https://codebybartlomiej.pl/static/ezgif-frame-${index.toString().padStart(3, '0')}.webp`
  )

  const frameCount = 81;

  const handleScroll = () => {
    const frameIndex = Math.min(
      frameCount,
      Math.ceil(scrollTop * frameCount / 100)
    );

    setFrameIndex(frameIndex);
  }

  useEffect(() => {
    preloadImages();
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTop])

  useEffect(() => {
    if(!divRef.current) return;

    if(frameIndex > 81) return;
    divRef.current.src = images.current[frameIndex].src;
  }, [frameIndex])

  return (
    <>
      <div className="h-[300vh] w-full bg-white" ref={containerRef}>
        <img ref={divRef} 
          src="https://codebybartlomiej.pl/static/ezgif-frame-000.webp"
          style={{ 
            opacity: scrollTop > 100 ? (115 - scrollTop) / 15 : 1,
            display: scrollTop > 115 ? 'none' : 'block',
            objectFit: 'cover',
          }}
          className='w-full h-screen fixed top-0 left-0 z-20 bg-dark'>
        </img>
      </div>
    </>
  );
};

export default Player;
