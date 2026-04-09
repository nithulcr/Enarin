import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";


export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Family Visa Documentation Support',
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
        heading_en="Family Visa Documentation Support"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Family Visa Documentation Support</h1>
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
                  Family visa documentation is one of the most sensitive areas of attestation because it directly affects the ability of families to reunite and live together. Whether someone is sponsoring their spouse, children, parents, or newborns, each visa category requires a set of documents that must be properly attested and translated before submission. A single missing stamp or incomplete verification can result in delays that affect families emotionally and financially.
                  </p>
                  <p className='font-light'>
                  lucidplus supports families by ensuring that every document—marriage certificates, birth certificates, tenancy contracts, salary statements, bank statements, and identification documents—is carefully reviewed and prepared. We guide clients through each requirement, explaining the process in simple terms while taking full responsibility for the attestation, legalisation, and translation.
                  </p>
                  <p className='font-light'>
                  For new residents, long-term expatriates, and Golden Visa holders, our service ensures that family reunification happens smoothly and without complications. lucidplus works with government portals, immigration systems, and ministry channels to provide a complete documentation solution that supports the dream of living together in the UAE.
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
