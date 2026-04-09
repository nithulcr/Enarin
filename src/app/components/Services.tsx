"use client";

import React, { useRef } from "react";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AnimatedButton from "./AnimatedButton";
import Image from "next/image";
import SignatureIcon from "../components/SignatureIcon";






const ServicesDataEn = [
  {
    id: "01",
    img: '/hero1.png',
     icon: '/binghatti.png',
    title: <>Binghatti</>,
    description: "Binghatti creates iconic hyper-properties through innovative design.",
    link: "#",
  },
  {
    id: "02",
    img: '/hero2.png',
 icon: '/danube.png',
    title: <>Danube Properties</>,
    description: "The Group runs award-winning brands including Danube Building Materials, Danube Home, and Alucopanel.",
    link: "#",

  },

  {
    id: "03",
    img: '/hero3.png',

    icon: '/sobha.png',
    title: <>Sobha Realty</>,
    description: "We focus on craftsmanship and detailing is a part of our legacy, spanning five decades.",
    link: "#",
  },
 



];



const Services = () => {
  const data = ServicesDataEn;

  const fadeRef = useRef<HTMLHeadingElement>(null);
  useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);

  return (
    <section className="py-14 lg:py-24 bg-[var(--siteColor)]">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }} className="heading flex flex-col items-center  text-white max-w-[600px] mx-auto mb-14 mx-auto px-6">
          <div className="flex items-center gap-2 mb-3 uppercase text-sm white-icon">
           <SignatureIcon width={20} height={20} />

           Dubai Real Estate.
          </div>
          <h2 ref={fadeRef} className="text-center  fade-up-stagger text-3xl lg:text-[46px] font-medium mb-1 leading-tight  ">
           Invest in Dubai Real Estate.
        Secure Your Future.
          </h2>
          
        </motion.div>
        <div className="service-slide">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}


            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}

            speed={2000}
            // centeredSlides={true}
            observer={true}
            observeParents={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
             
            }}
            className="mySwiper cursor-grab"
          >
            {data.map((choose, index) => (
              <SwiperSlide key={`${choose.id}-${index}`}>
                <div
                  className="group bg-[#101010] rounded-2xl lg:rounded-3xl p-7 sm:p-9  relative h-full min-h-[240px] lg:min-h-[330px] flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute w-full h-full left-0 top-0 service-card-overlay lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Image src={choose.img || "/service1.png"} alt="service" width={400} height={400} className="object-cover w-full h-full" />
                  </div>

                  <div className=" md:h-18 h-12 z-1 group-hover:opacity-0 flex items-center  ">
                   
                     <Image src={choose.icon || "/logo-white.png"} alt="service" width={100} height={50} className="h-[50px] w-full max-w-[150px]  object-contain" />
                  </div>


                  <div className="relative z-1">
                    <h3 className="text-lg md:text-xl uppercase leading-tight font-semibold text-white mt-2 group-hover:opacity-0 lg:block hidden transition-all duration-500">{choose.title}</h3>
                    <p className="text-xs text-[#D9D9D9] sm:text-sm lg:mt-2 font-light max-w-[300px] mt-2 group-hover:opacity-0 lg:block hidden transition-all duration-500">{choose.description}</p>
                    {/* Description */}
                    <div className="absolute bottom-[0px] z-1  lg:h-0 lg:opacity-0 translate-y-4 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-0 transition-all duration-500 overflow-hidden">
                      <h3 className="text-lg uppercase md:text-xl leading-tight font-semibold text-white mt-2 ">{choose.title}</h3>
                      <p className="text-xs text-[#D9D9D9] sm:text-sm lg:mt-2 font-light max-w-[250px] mt-2">{choose.description}</p>

                      <AnimatedButton href="{choose.link}" label="Learn More" className="w-fit transparent-btn2 mt-3" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Services;