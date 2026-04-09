// components/ThreeStepProcess.tsx

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import SignatureIcon from "../components/SignatureIcon";



const steps = [
    {
        title: "Share Your Requirements",
        number: '01',
        description: "Tell us your business goals and the solution you need. Our team understands your vision and requirements before moving forward.",
    },
    {
        title: "Planning & Development",
        number: '02',
        description: "We design and develop tailored digital solutions using modern technologies and proven methods to turn your ideas into a functional product.",
    },
    {
        title: "Launch & Ongoing Support",
        number: '03',
        description: "Once your project is ready, we launch it smoothly and provide continuous support and maintenance to keep everything running efficiently.",
    },

];

export default function ThreeStepProcess() {
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);
    return (
        <section className=" py-14 lg:py-24 relative bottom-shape overflow-hidden bg-[var(--background2)]">
            <div className="max-w-[1360px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }} className="heading flex flex-col gap-4  items-center  mx-auto mb-10 md:mb-14">
                    
                        <div className="flex items-center gap-2 text-site mb-3 uppercase text-sm justify-center md:justify-start">
                            <SignatureIcon width={20} height={20} />
                            working process
                        </div>
                        <div className=" gap-2  lg:gap-8">
                            <h2 ref={fadeRef} className="text-center fade-up-stagger text-3xl lg:text-[46px] max-w-[400px] font-medium mb-1 leading-tight text-site">
                                Proven Workflow for Our Success
                            </h2>
                        </div>

                    
                   
                </motion.div>

                <div className="flex flex-col md:flex-row gap-5  justify-center">




                    {steps.map((step, idx) => (
                        <div key={step.title} className="flex-1 flex flex-col process-card rounded-2xl p-7 lg:p-9  bg-[var(--background)] relative transition-all duration-500 relative top-0 hover:top-[-5px]">
                            <svg width="54" height="54" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-card-svg">
                                <circle cx="28.7426" cy="29.1167" r="28.1875" fill="#e7e7e7ff" />
                                <circle cx="28.7425" cy="29.1165" r="22.3797" fill="white" />
                                <path d="M21.3978 29.1167H23.2606M33.3197 29.1167L28.849 24.646M33.3197 29.1167L28.849 33.5874M33.3197 29.1167H25.496" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="gradient-text mb-4 text-7xl md:text-9xl font-semibold bg-[linear-gradient(180deg,#000_16%,#00a8ff_88%)] bg-clip-text text-transparent">
                                {step.number}
                            </div>


                            <div className="bg-[var(--blue1)] w-full">

                                <h3 className="text-xl md:text-[22px] font-bold mb-2 text-site">{step.title}</h3>
                                <p className="text-md  font-light  max-w-[310px] pb-2 text-justify">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
