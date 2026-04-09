import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | MOFA Attestation',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function Commertial() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="MOFA Attestation (UAE)"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>MOFA Attestation (UAE)</h1>
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
                    MOFA attestation is the final and most essential stage for any document intended for use within the UAE. Regardless of how many authorities have previously verified a document—whether in the issuing country or at its embassy—the UAE government requires every foreign document to be authenticated by the UAE Ministry of Foreign Affairs before it is considered legally valid.
                  </p>
                  <p className='font-light'>
                    At lucidplus, we handle MOFA attestation as a seamless extension of the entire legalisation journey. We manage the submission, verification, approval, and final collection, ensuring that the process is as quick and stress-free as possible. Since MOFA attestation requires precise documentation and fee payments, our team ensures everything is prepared in advance so there are no delays.
                  </p>
                  <p className='font-light'>
                    Whether it is a degree certificate for employment, a marriage certificate for family sponsorship, a commercial license for business setup, or a medical certificate for legal use, lucidplus ensures every document receives the official recognition it needs to be used confidently in the UAE.
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
