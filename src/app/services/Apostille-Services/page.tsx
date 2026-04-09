import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Apostille Services',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function Apostille() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Apostille Services"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Apostille Services</h1>
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
                    The Apostille process is a simplified method of international document legalisation, accepted by all member countries of the Hague Convention. Unlike traditional attestation—which requires multiple embassy and MOFA approvals—apostille certification condenses the process into a single verified seal issued by the designated authority in the document’s home country.

                  </p>
                  <p className='font-light'>
                  lucidplus offers complete apostille services for individuals and businesses who need to validate their documents for use in countries that recognise the Hague Convention. The process is straightforward but must be executed with accuracy to avoid rejection. Our experts ensure that each document meets all apostille requirements, including correct formatting, verification, and supporting documentation.
                  </p>
                  <p className='font-light'>
                    Whether the document is educational, personal, or commercial, lucidplus ensures that it undergoes the required apostille process efficiently. Clients trust us for our clarity, expertise, and ability to manage complex international requirements with ease.
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
