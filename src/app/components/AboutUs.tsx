"use client";

import Image from "next/image";
import AnimatedButton from "./AnimatedButton";


export default function AboutUs() {

  return (

    <section  className="pt-10 pb-16 lg:pt-20 lg:pb-32">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div className="relative flex justify-center  lg:flex h-full">

          <Image
            src="/about-us.png"
            alt="Business for Success"
            width={550}
            height={550}
            className="object-cover f-full  rounded-[16px] mx-auto max-w-[500px]"
          />

        </div>
        <div className="flex flex-col gap-4 lg:gap-6 ">
          
          <h2 className="text-2xl lg:text-[40px] font-medium leading-tight">Consulting Services
            Empo-wering Your
            Business for Success.</h2>
          <p className="leading-relaxed ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by words which don’t look even slightly believable.
          </p>
           <Image
            src="/sign.png"
            alt="sign"
            width={150}
            height={150}
            className="object-contain lg:mt-2 "
          />
          <AnimatedButton label="About Us" className="w-fit text-white lg:mt-2" />


        </div>
        
      </div>
    </section>

  );
}
