import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function wrapWords(node: ChildNode): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return (node.textContent || "")
      .split(/\s+/)
      .map(word => {
        if (!word) return "";
        return `<span style="display:inline-block;opacity:0;height:0;overflow:hidden;line-height:1;margin-right:4px">${word}</span>`;
      })
      .join(" ");
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node as HTMLElement;
    const children = Array.from(el.childNodes).map(wrapWords).join(" ");
    return `<${el.tagName.toLowerCase()}${Array.from(el.attributes).map(attr => ` ${attr.name}="${attr.value}"`).join("")}>${children}</${el.tagName.toLowerCase()}>`;
  }
  return "";
}


export function useStaggeredFadeUp<T extends HTMLElement>(ref: React.RefObject<T>) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const originalHTML = element.innerHTML;

    // Wrap words, preserve nested tags/styles
    const wrappedHTML = Array.from(element.childNodes).map(wrapWords).join(" ");
    element.innerHTML = wrappedHTML;

    // Fix container height to prevent jumping
const fullHeight = element.offsetHeight;
const buffer = 10; // pixels to add extra height for comfort
element.style.height = `${fullHeight + buffer}px`;
element.style.overflow = "hidden";


    const wordSpans = element.querySelectorAll("span");

    // Initialize spans styles
    wordSpans.forEach(span => {
      span.style.overflow = "hidden";
      span.style.height = "0px";
      span.style.opacity = "0";
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
      },
    });

    // Animate height to auto and fade in opacity staggered
    tl.to(wordSpans, {
      height: "auto",
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: { each: 0.12 },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      element.innerHTML = originalHTML; // Restore on cleanup
      element.style.height = "";        // Reset height
      element.style.overflow = "";
    };
  }, [ref]);
}
