import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Translation Services',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function TranslationServices() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Translation Services"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Translation Services</h1>
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
                   In a country as globally connected as the UAE, translation plays an important role in legal, corporate, and immigration processes. Documents issued in one language must often be translated into Arabic or English before being accepted by embassies, ministries, courts, and governmental institutions. This translation must be accurate, legally recognised, and certified, ensuring that it carries the same value as the original.
                  </p>
                  <p className='font-light'>
                 lucidplus Attestation offers professional translation services that cover a wide range of languages. Our work is carried out by certified linguists who understand both the linguistic and legal significance of each document. Whether you are translating certificates, contracts, academic transcripts, commercial agreements, medical reports, or legal statements, every translation is produced with cultural accuracy, legal correctness, and complete adherence to government standards.
                  </p>
                  <p className='font-light'>
                   Translations are not merely word replacements—they must preserve the meaning, structure, and legal terminology of the original document. Our translators are trained to work with documents that require exact phrasing and terminology, ensuring the final translation is accepted without dispute. Once translated, documents can be forwarded for attestation or legalisation, making lucidplus a one-stop destination for both translation and attestation requirements.
                  </p>
                  <p className='font-light'>
                    At lucidplus, every translated document is reviewed, stamped, and prepared for submission to the relevant authority. This ensures smooth acceptance and eliminates the risk of rejection due to translation errors. Clients trust us for our deep linguistic expertise, fast turnaround, and consistent adherence to international translation standards.
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
