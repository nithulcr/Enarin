"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Logo image array
const images = [
  "/marquee-logos/logo1.png",
  "/marquee-logos/logo2.png",
  "/marquee-logos/logo3.png",
  "/marquee-logos/logo4.png",
  "/marquee-logos/logo5.png",
  "/marquee-logos/logo6.png",
  "/marquee-logos/logo7.png",
  "/marquee-logos/logo8.png",

];

function InfiniteMarquee({ speed = 200, children }: { speed?: number; children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const x = useMotionValue(0);
  const animation = useAnimation();

  useEffect(() => {
    if (!containerRef.current) return;
    const scrollWidth = containerRef.current.scrollWidth / 2;
    setContentWidth(scrollWidth);
    x.set(0);
    animation.start({
      x: -scrollWidth,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: scrollWidth / speed,
      },
    });
  }, [speed, animation, x]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap select-none" style={{ willChange: "transform" }}>
      <motion.div className="flex items-center  min-w-max" style={{ x }} animate={animation}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>

    </div>
  );
}

// Usage
export default function InfiniteMarqueeExample() {
  return (
    <div className="pb-10">
      <h2 className="text-2xl lg:text-[40px] font-medium  max-w-[1320px] px-6 text-center mb-8 lg:mb-15 mx-auto">Your Gateway to Government Success</h2>
      <InfiniteMarquee speed={30}>
        <div className="flex items-center gap-12 px-4">
          {images.map((src, i) => (
            <span className=" marquee-img"  key={i}>
              <img
              
                src={src}
                alt={`Logo ${i + 1}`}
                className="lg:h-14 h-10 w-auto object-contain"
                draggable={false}
              />
            </span>
          ))}
        </div>

      </InfiniteMarquee>
    </div>
  );
}
