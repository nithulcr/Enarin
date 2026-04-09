import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Commercial Document Attestation',
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
        heading_en="Commercial Document Attestation"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Commercial Document Attestation</h1>
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
                  <p className='font-light'>Commercial documents form the backbone of every business. They reflect a company’s legal identity, financial operations, ownership structure, agreements, and international dealings. When businesses expand into new markets, enter global partnerships, submit tenders, sign contracts, or engage in cross-border trade, commercial documents must be authenticated to maintain legal compliance and official recognition.
                  </p>
                  <p className='font-light'>
                    lucidplus Attestation provides comprehensive support for commercial document attestation, ensuring that companies operate with complete confidence in international markets. From incorporation papers to board resolutions, financial statements, agreements, invoices, and corporate powers of attorney, we handle every document with the precision required for global use.
                  </p>
                  <p className='font-light'>
                    Commercial attestation is more structured and often more sensitive due to the impact it has on legal and financial operations. It usually involves validation by chambers of commerce, ministries of economy, foreign ministries, and embassies. Each stage verifies a different dimension of the document—its purpose, its issuing authority, its signatures, and its legal binding nature. After embassy legalisation, the document undergoes final MOFA approval in the UAE, enabling it to be used within the legal, corporate, and banking systems.
                  </p>
                  <p className='font-light'>
                    Businesses rely on lucidplus because we offer unmatched clarity, quick processing, and strict compliance. Whether a startup, SME, or multinational corporation, our commercial attestation solutions ensure that every document is validated according to the highest international standards. With lucidplus, businesses save time, avoid legal complications, prevent compliance issues, and maintain smooth operations across borders.
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
