import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | True Copy Attestation',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function TrueCopy() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="True Copy Attestation"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>True Copy Attestation</h1>
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
                    True Copy Attestation is the process of verifying that a photocopy of a document is an exact and accurate representation of its original. This verification is essential for legal, financial, and administrative purposes in many countries. Banks, courts, consulates, and government departments often require true copies for submissions when the original documents cannot be handed over.

                  </p>
                  <p className='font-light'>
                  lucidplus collaborates with authorised lawyers, notaries, and legal offices to produce certified true copies that are globally recognised. Once a true copy is verified, it can also be processed for further legalisation, including embassy and MOFA attestation. True copy certification is handled with the same reliability, security, and professionalism as all our other services, ensuring that your documents maintain their full legal value, even in photocopied form.
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
