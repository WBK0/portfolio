"use client";
import { useEffect, useRef, useState } from "react";

const Player = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

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
  }, [containerRef.current])

  const [frameIndex, setFrameIndex] = useState(0)
  const images = useRef<HTMLImageElement[]>([]);
  
  const preloadImages = () => {
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current[i] = img;
    }
  };

  const currentFrame = (index : number) => (
    `http://localhost:3000/static/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
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

    divRef.current.style.backgroundImage = `url(${currentFrame(frameIndex)})`;
  }, [frameIndex])

  return (
    <div className="h-[300vh] w-full bg-white" ref={containerRef}>
      <div ref={divRef} 
        style={{backgroundSize: 'cover', backgroundPosition: 'center', 
          opacity: scrollTop > 100 ? (115 - scrollTop) / 15 : 1,
          display: scrollTop > 115 ? 'none' : 'block'
        }}
        className='w-full h-screen fixed top-0 left-0 z-20 bg-dark'>
      </div>
    </div>
  );
};

export default Player;
