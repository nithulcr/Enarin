import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Corporative Services',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function Educational() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Educational Certificate Attestation"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Educational Certificate Attestation</h1>
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
                  <p className='font-light'>
Educational documents are the foundation of your professional identity. They speak on your behalf when you apply for a job abroad, seek admission in international universities, or pursue specialised licensing programs. Without proper attestation, even the most prestigious degrees may lose their value in the eyes of foreign authorities. Recognising this, lucidplus Attestation treats every educational document with meticulous care, ensuring that it meets all global standards of verification.
                  </p>
                  <p className='font-light'>
                    
                  The educational attestation journey begins long before the document reaches a ministry or an embassy. It starts with understanding the certificate’s origin—its issuing university, the country’s procedures, the level of study, and the purpose for which it will be used. Each of these factors influences the pathway the document must follow. Our specialists study these requirements in detail and design the precise attestation pathway for each certificate. Whether it is a degree, diploma, transcript, nursing certificate, technical qualification, or school certificate, we ensure that it is pre-checked for accuracy so that no mistakes appear later in the verification process.
                  </p>
                  <p className='font-light'>
                   Once the document is deemed ready, it moves through various stages involving university verification, state-level authentication, and foreign ministry approval, eventually reaching the UAE Embassy in the issuing country. Each stage adds an additional layer of authenticity to the document. The final approval is completed with UAE MOFA attestation, ensuring the certificate is valid and legally acceptable within the UAE.
                  </p>
                  <p className='font-light'>
                   For students, job seekers, healthcare professionals, engineers, educators, IT specialists, and skilled workers, lucidplus ensures that the attestation process becomes an effortless experience. Instead of navigating government protocols, our clients simply hand over their documents and receive them back fully attested, ready to support their dreams and ambitions abroad.
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
