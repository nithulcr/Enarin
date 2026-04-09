'use client';

import { useState, useEffect } from "react";

import Header from "./Header";

import Hero from "./Hero";

import WhoWeAre from "./WhoWeAre";
import ProjectsScroller from "./ProjectsScroller";
import OurValues from "./OurValues";

import MainServices from "./MainServices";
import Partners from "./Partners";


import CaseStudy from "./CaseStudy";


import ThreeStepProcess from "./ThreeStepProcess";




import Testimonials from "./Testimonials";
import Blogs from "./Blogs";


import Footer from "./Footer";

export default function HomePageClient() {
    const [showContent, setShowContent] = useState(true);

  return (
    <div>

      {showContent && (
        <>
          <Header />
  
          <Hero />

          <WhoWeAre />
          <ProjectsScroller />
          <OurValues />
          <MainServices />

        

          <CaseStudy />
          <Partners />
         
          <ThreeStepProcess />


          <Testimonials />

          <Blogs />






          <Footer />
        </>
      )}
    </div>
  );
}
