import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Document Attestation Overview',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function Document() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Document Attestation Overview"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Document Attestation Overview</h1>
            </div>
            <Image
              src="/trade.png"
              alt="Business for Success"
              width={550}
              height={550}
              className="object-cover f-full  rounded-[16px] w-full"
            />
            <div className='flex flex-col gap-8 md:gap-12'>
              <div>
                <div className=' flex flex-col gap-4'>
                  <p className='font-light'>Document attestation is the process of validating a document’s authenticity so it can be legally accepted in another country. It is a crucial requirement for visas, employment, education, family sponsorships, and corporate activities. Attestation involves a sequence of approvals, each confirming that the document is genuine and has been issued by the appropriate authority. Since every country follows a different attestation structure, the process can quickly become overwhelming for individuals who are unfamiliar with international legal procedures.

                  </p>
                  <p className='font-light'>
                    lucidplus ensures that your documents move through every stage smoothly. We begin by reviewing the document for formatting errors, incorrect details, or missing seals. Once verified, the document proceeds through various departments such as notary offices, state authorities, foreign ministries, and international embassies. The final stage often includes MOFA attestation, which makes the document valid inside the UAE.
                  
                  </p>
                  <p className='font-light'>
                    What makes lucidplus unique is our ability to handle variations in documents, country-specific rules, and embassy protocols with professionalism and clarity. Every document undergoes a custom-designed route depending on its type—educational, personal, or commercial—and the country where it will be used. With lucidplus, the entire attestation journey becomes predictable, transparent, and stress-free.
                  </p>
                </div>

              </div>
              
            </div>
          </div>
          <div className='lg:col-span-1'>
            <div className='max-w-[500px] mx-auto'>
              <ServiceTabs />
            </div>
          </div>


        </div>

      </section>


      <Footer />
    </>
  );
}
