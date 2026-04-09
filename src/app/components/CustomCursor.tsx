"use client";

import React, { useEffect, useRef } from "react";

const lerp = (start: number, end: number, amt: number) => {
  return (1 - amt) * start + amt * end;
};

const CustomCursor: React.FC = () => {
  const OutlineCursorRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Store actual mouse coords
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Store cursor positions to animate towards mouse coords
  const outlineX = useRef(0);
  const outlineY = useRef(0);

  useEffect(() => {
    const OutlineCursor = OutlineCursorRef.current;
    const cursor = cursorRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (cursor) {
        cursor.style.left = `${mouseX.current}px`;
        cursor.style.top = `${mouseY.current}px`;
      }
    };

    // Animation loop
    const animate = () => {
      if (!OutlineCursor) return;

      outlineX.current = lerp(outlineX.current, mouseX.current, 0.15);
      outlineY.current = lerp(outlineY.current, mouseY.current, 0.15);

      OutlineCursor.style.transform = `translate(calc(${outlineX.current}px - 50%), calc(${outlineY.current}px - 50%))`;

      requestAnimationFrame(animate);
    };

    animate();

    const links = document.querySelectorAll("a");

    const handleMouseOver = () => {
      if (OutlineCursor) OutlineCursor.classList.add("hover");
    };

    const handleMouseLeave = () => {
      if (OutlineCursor) OutlineCursor.classList.remove("hover");
    };

    document.addEventListener("mousemove", handleMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="OutlineCursor" ref={OutlineCursorRef}>
        <div className="cursor" ref={cursorRef}></div>
      </div>
    </>
  );
};

export default CustomCursor;
