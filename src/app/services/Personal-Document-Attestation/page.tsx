import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Personal Document Attestation',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function Personal() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Personal Document Attestation"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Personal Document Attestation</h1>
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
                  <p className='font-light'>Personal certificates carry deep emotional and legal significance. They represent life events, family relationships, identity details, and civil status. When these documents need to be used internationally—whether for visas, family sponsorships, marriage registration, adoption, schooling, medical procedures, or legal matters—they must undergo a thorough attestation process. This process confirms that the information contained within them is genuine and officially recognised by the issuing country.

                  </p>
                  <p className='font-light'>
                   lucidplus handles personal documents with exceptional sensitivity and confidentiality. From birth certificates that confirm identity, to marriage certificates that establish family bonds, and from PCC that reflect an individual’s background history to medical or death certificates used for legal requirements—we ensure that each document is processed with the respect it deserves.
                  </p>
                  <p className='font-light'>
                    Personal attestation follows its own unique pathway. It typically begins with local verification by the issuing authority, moves through notary and state home departments, and then proceeds to the foreign ministry. After these validations, the document is legalised by the UAE Embassy in the home country. The final step, which confirms its acceptance inside the UAE, is the MOFA attestation. At lucidplus, we oversee each step with precision, ensuring that no detail is overlooked and that the document is accepted without question by immigration departments, government offices, courts, and schools.
                  </p>
                  <p className='font-light'>
                    When a family decides to reunite in the UAE, or when a couple seeks to register their marriage in a foreign country, or when parents want to enrol their child in school abroad, documentation can become overwhelming. lucidplus removes this burden entirely and ensures that personal life events are supported with correct, timely, and hassle-free attestation.
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
