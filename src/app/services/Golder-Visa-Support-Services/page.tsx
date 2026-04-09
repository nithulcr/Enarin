import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Golder Visa Support Services',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function FamilyVisa() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Golder Visa Support Services"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Golder Visa Support Services</h1>
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
                   The UAE Golden Visa represents one of the most prestigious residency programs available today. Offering long-term residency to investors, professionals, exceptional talents, and high-achieving individuals, the Golden Visa opens doors to a stable future in one of the world’s most progressive nations. However, the application process involves detailed eligibility checks, specific documentation, strict attestation requirements, and continuous coordination with government entities.
                  </p>
                  <p className='font-light'>
                    lucidplus provides a seamless Golden Visa documentation service that supports applicants at every stage. Our process begins with a personalised eligibility assessment where we analyse each client’s professional profile, qualifications, category criteria, salary structure, investment size, and academic achievements to determine the most suitable Golden Visa pathway. Once the eligibility is confirmed, we prepare a clear documentation roadmap.
                  </p>
                  <p className='font-light'>
                    Golden Visa documentation often requires attested educational certificates, salary statements, employment contracts, commercial licenses, bank statements, or specialised approval letters. lucidplus manages the attestation of every document—whether local or international—ensuring that all papers meet UAE residency standards. We also assist with translation, medical tests, Emirates ID procedures, visa stamping, and family inclusion, making the process smooth for the entire household.
                  </p>
                  <p className='font-light'>
                    Our Golden Visa team provides detailed guidance, real-time updates, and continuous support until the residency permit is successfully issued. With lucidplus, clients experience a Golden Visa journey that is structured, guided, and free from uncertainty, ensuring that they settle into the UAE with confidence and long-term security.
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
