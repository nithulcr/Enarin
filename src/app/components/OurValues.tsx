"use client";
import { useRef, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import { motion } from "framer-motion";
import SignatureIcon from "../components/SignatureIcon";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // heading fill


            // cards rotate in from right
            gsap.utils.toArray(".services-rotate-right").forEach((elem) => {
                const target = elem as HTMLElement;
                gsap.fromTo(
                    target,
                    { x: -100, opacity: 0, rotate: -5 },
                    {
                        x: 0,
                        opacity: 1,
                        rotate: 0,
                        duration: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: target,
                            start: "top 90%",
                            end: "bottom 40%",
                            scrub: 0.7,
                        },
                    }
                );
            });

            // cards rotate in from left
            gsap.utils.toArray(".services-rotate-left").forEach((elem) => {
                const target = elem as HTMLElement;
                gsap.fromTo(
                    target,
                    { x: 100, opacity: 0, rotate: 5 },
                    {
                        x: 0,
                        opacity: 1,
                        rotate: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: target,
                            start: "top 90%",
                            end: "bottom 40%",
                            scrub: 0.7,
                        },
                    }
                );
            });

            
        }, containerRef);

        return () => ctx.revert();
    }, []);



    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);

    return (
        <section ref={containerRef} id="services" className="section overflow-hidden py-12 lg:py-24">
            <div className="max-w-[1360px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }} className="heading flex flex-col max-w-[400px] text-left  mb-14">


                    <div className="flex  gap-2 text-site mb-3 uppercase text-sm  md:justify-start">
                        <SignatureIcon width={20} height={20} />

                        Work Smarter. Achieve More
                    </div>
                    <h2 ref={fadeRef} className="mt-3 text-center md:text-left fade-up-stagger text-3xl lg:text-[46px]  font-medium mb-1 leading-tight text-site">
                        
                        Numbers That Power Our Story


                    </h2>

                </motion.div>
                <div className="service-list grid gap-y-10 lg:gap-y-30">
                    <div className="service-item flex flex-col lg:grid gap-x-20 items-center w-full">

                        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10  w-full">
                            <div className="flex flex-col gap-10 ">
                                <div className="services-rotate-right bg-[#26957d40] md:bg-[var(--background2)] hover:bg-[#26957d40] relative rounded-2xl p-8 flex flex-col justify-between">
                                    <h3 className="text-7xl font-monument">100+</h3>
                                    <p className="text-2xl font-medium uppercase leading-snug text-right tracking-wide max-w-[200px] ml-auto mt-10 lg:mt-20">
                                        Happy 
<br />
                                       Clients
                                    </p>
                                </div>
                                <div className="services-rotate-right bg-[#e5484d3b] md:bg-[var(--background2)] hover:bg-[#e5484d3b] relative rounded-2xl p-8 flex flex-col justify-between">
                                    <h3 className="text-7xl font-monument">7+</h3>
                                    <p className="text-2xl font-medium uppercase leading-snug text-right tracking-wide max-w-[300px] ml-auto mt-10 lg:mt-20">
                                       Years of Bsuiness Soltions Experience
                                    </p>
                                </div>
                              
                            </div>
                            <div className="flex flex-col gap-10  md:mt-[-50]">
                                <div className="services-rotate-left bg-[#6f8f1042] md:bg-[var(--background2)] hover:bg-[#6f8f1042] relative rounded-2xl p-8 flex flex-col justify-between">
                                    <h3 className="text-7xl font-monument">10+</h3>
                                    <p className="text-2xl font-medium uppercase leading-snug text-right tracking-wide max-w-[280px] ml-auto mt-10 lg:mt-20">
                                      countries: Team presence on all continents
                                    </p>
                                </div>
                                <div className="services-rotate-left bg-[#348bf142] md:bg-[var(--background2)] hover:bg-[#348bf142] relative rounded-2xl p-8 flex flex-col justify-between">
                                    <h3 className="text-7xl font-monument">10</h3>
                                    <p className="text-2xl font-medium uppercase leading-snug text-right tracking-wide max-w-[300px] ml-auto mt-10 lg:mt-20">
                                       Licensed Business Solutions Company
                                      

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
