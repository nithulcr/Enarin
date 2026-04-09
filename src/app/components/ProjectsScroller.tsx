"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topRowImages = [
    "/banner1.webp",
    "/banner2.webp",
    "/banner3.webp",
    "/mobile-app.png",
    "/maintance.png",
    "/banner1.webp",
    "/banner2.webp",
    "/banner3.webp",
    "/mobile-app.png",
    "/maintance.png",



];

const bottomRowImages = [
    "/banner3.webp",
    "/mobile-app.png",
    "/maintance.png",
    "/banner1.webp",

    "/banner2.webp",
        "/mobile-app.png",
    "/maintance.png",
    "/banner2.webp",
    "/banner3.webp",
       "/banner1.webp",

];

export default function ProjectsScroller() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const topRowRef = useRef<HTMLDivElement | null>(null);
    const bottomRowRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current || !topRowRef.current || !bottomRowRef.current) return;


        let ctx: ReturnType<typeof gsap.context> | null = null;

        ctx = gsap.context(() => {
            const trigger = sectionRef.current as HTMLElement;

            // top row: move left on scroll
            gsap.fromTo(
                topRowRef.current,
                { xPercent: 0 },
                {
                    xPercent: -20, // adjust strength
                    ease: "none",
                    scrollTrigger: {
                        trigger,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            // bottom row: move right on scroll
            gsap.fromTo(
                bottomRowRef.current,
                { xPercent: 0 },
                {
                    xPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        }, sectionRef);

        return () => {
            ctx?.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-6 lg:pt-10 lg:pb-24 pb-14 relative"
        >
            <div className="space-y-8">

                <div className="overflow-hidden">
                    <div
                        ref={topRowRef}
                        className="flex gap-6 will-change-transform"
                    >
                        {topRowImages.map((src, i) => (
                            <div
                                key={i}
                                className="relative w-50 h-34 lg:w-100 lg:h-70 rounded-3xl overflow-hidden bg-neutral-800 flex-shrink-0"
                            >
                                <Image
                                    src={src}
                                    alt={`Project ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom row */}
                <div className="overflow-hidden ml-[-50%]">
                    <div
                        ref={bottomRowRef}
                        className="flex gap-6 will-change-transform"
                    >
                        {bottomRowImages.map((src, i) => (
                            <div
                                key={i}
                                className="relative w-50 h-34 lg:w-100 lg:h-70 rounded-3xl overflow-hidden bg-neutral-800 flex-shrink-0"
                            >
                                <Image
                                    src={src}
                                    alt={`Project ${i + 1 + topRowImages.length}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
