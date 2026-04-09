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




export default function UAEIssued() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="UAE-Issued Document"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>UAE-Issued Document</h1>
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
                   Documents issued within the UAE—whether educational, personal, legal, or commercial—often require attestation before they can be used outside the country. This process validates the authenticity of the document and ensures it is internationally recognised. UAE-issued certificates must typically pass through local ministries, courts, notary public offices, and embassy channels before they are accepted abroad.
                  </p>
                  <p className='font-light'>
                  lucidplus assists clients by managing every step of this journey. Whether it is a degree issued by a UAE university, a birth or marriage certificate issued by Dubai Courts or Abu Dhabi Judicial Department, or commercial documents issued by the economic department, each document undergoes precise verification. Our team liaises with relevant ministries such as the Ministry of Education, the Ministry of Justice, and the MOFA UAE, and completes embassy legalisation for the destination country.
                  </p>
                  <p className='font-light'>
                  For clients planning to migrate, pursue higher studies abroad, expand their business, or complete legal processes overseas, lucidplus ensures that every UAE-issued document is prepared with accuracy and certified according to international requirements.
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
