"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "../components/useStaggeredFadeUp";


import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import Features from "../components/Features";

import Footer from "../components/Footer";





export default function Home() {
  const fadeRef = useRef<HTMLHeadingElement>(null);
  useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);
  return (
    <>
      <Header />
      <Hero2
        heading_en="About Us"
        breadcrumbPosition="left"
      />
      <Features />
      <section className="bg-[#D5E5E3] py-14 lg:py-24 rounded-3xl relative top-shape overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="relative flex justify-center  lg:flex h-full">

            <Image
              src="/about-us2.png"
              alt="Business for Success"
              width={1000}
              height={1000}
              className="object-cover f-full w-full rounded-[16px] mx-auto max-w-[600px]"
            />


          </div>
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }} className="heading flex flex-col gap-4   mb-10">

              <div className="flex items-center gap-2 text-site mb-3 uppercase text-sm justify-center md:justify-start">
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0742 0.86853L16.0966 5.58161L19.6848 0.86853H17.0742ZM24.7565 1.85392L18.6755 8.84619L24.7565 6.31989V1.85392ZM9.19522 4.23193C9.16211 4.23246 9.12956 4.23372 9.0968 4.23525C8.61387 4.2575 8.16395 4.37421 7.79238 4.63566C6.93093 5.24169 7.21881 6.59506 6.63559 7.96289C4.64293 12.636 2.62996 16.0252 0.851196 18.5263V23.9777C3.97841 22.8521 8.63611 21.6856 15.4428 21.4513C16.8711 21.4023 17.9681 22.1148 18.8246 21.5124C20.939 20.0249 20.1735 15.0541 17.1346 10.3953C16.9446 10.1042 16.7677 9.80785 16.5696 9.53342C14.193 6.24142 11.282 4.20287 9.19511 4.23203L9.19522 4.23193ZM8.92227 5.52392C8.57919 6.25656 8.90135 7.83685 9.73162 9.78222C9.46959 8.79999 9.49356 8.08723 9.86807 7.85083C10.6869 7.33392 12.8669 9.28388 14.7367 12.2064C16.6065 15.1287 17.4582 17.917 16.6395 18.4339C16.3026 18.6466 15.7351 18.4412 15.0541 17.923C16.4616 19.4045 17.732 20.2702 18.512 20.2252C18.4214 20.3924 18.3254 20.5545 18.1819 20.6554C16.8159 21.6165 13.5225 19.0602 10.8361 14.942C8.14973 10.8237 7.0849 6.69747 8.45092 5.73649C8.59092 5.63809 8.74463 5.55055 8.92227 5.52392ZM24.7565 11.6181L20.456 13.0649L24.7565 13.7423V11.6181Z" fill="#09424D" />
                </svg>
                Get to Know Us
              </div>
              <h2 ref={fadeRef} className="text-center md:text-left fade-up-stagger text-3xl lg:text-[46px] max-w-[500px] font-medium mb-1 leading-tight text-site">
               Trusted provider of comprehensive attestation and document solutions
              </h2>
              <p className="text-md  leading-snug  font-light">
                 We specialize in assisting individuals, professionals, and corporate clients in validating and legalizing official documents for use within the UAE and abroad. From educational certificates and marriage licenses to commercial contracts and legal paperwork, we ensure your documents are processed accurately, efficiently, and in full compliance with UAE regulatory standards.<br /><br /> Based in Dubai, our operations are supported by a dedicated team of attestation experts with deep knowledge of procedures involving the Ministry of Foreign Affairs (MOFA), embassies, consulates, and other key authorities.
                </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5  relative  ">

              <div

                className="group  p-5 lg:p-7  rounded-3xl bg-white relative transition-all duration-500 relative top-0 hover:top-[-5px]"
              >


                <div className="flex gap-4 items-center">

                  <h3 className="text-[18px] font-semibold">Our Mission</h3>
                </div>
                <p className="text-sm  leading-snug text-1 mt-4 font-light">
                 Our mission is to transform the attestation experience into a seamless, reliable, and stress-free journey. We aim to simplify the most complex processes and ensure that every document is handled with precision and care. Through professional expertise, clear communication, and strict quality control, we help people access global opportunities without the barriers that typically slow them down. lucidplus exists to make international documentation simple, secure, and accessible for everyone.
                </p>

              </div>
              <div

                className="group  p-5 lg:p-7  rounded-3xl bg-white relative transition-all duration-500 relative top-0 hover:top-[-5px]"
              >


                <div className="flex gap-4 items-center">

                  <h3 className="text-[18px] font-semibold">Our Vision</h3>
                </div>
                <p className="text-sm  leading-snug text-1 mt-4 font-light">
                 We envision lucidplus as the leading attestation company in the UAE and one of the most trusted names in global documentation. A future where every individual, business, and institution can rely on our services with absolute confidence. We aim to expand our capabilities across more countries, integrate advanced technologies, enhance customer experience, and build long-lasting relationships through results that speak for themselves. Our vision is to set the highest standard of service excellence in the global attestation industry.
                </p>

              </div>

            </motion.div>



          </div>

        </div>
      </section>


      <Footer />
    </>
  );
}
