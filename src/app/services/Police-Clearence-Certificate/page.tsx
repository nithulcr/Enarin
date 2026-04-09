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




export default function PCC() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Police Clearence Certificate (PCC)"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Police Clearence Certificate (PCC)</h1>
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
                   A Police Clearance Certificate, often recognised as a Good Conduct Certificate, stands as an essential proof of a person’s clean background. Whether someone is preparing to migrate, secure employment abroad, apply for a long-term visa, or complete a licensing procedure, the PCC acts as a declaration of trustworthiness. It assures foreign authorities that the individual does not hold any criminal record or pending legal charges in the issuing country. Understanding its importance, lucidplus Attestation provides an end-to-end service that simplifies what is often seen as one of the most complicated documentation requirements.
                  </p>
                  <p className='font-light'>
                 Obtaining a PCC involves different procedures based on the country of origin, and each country follows a distinct structure for verification. Some require biometric fingerprints, while others require embassy visits, identity checks, online submissions, or physical presence. lucidplus bridges these complexities by handling every layer of communication and submission on behalf of the client. Whether the certificate is from the UAE, India, Philippines, Pakistan, UK, USA, Canada, Europe, Africa, or any other region, our specialists are familiar with the exact workflow required.
                  </p>
                  <p className='font-light'>
                    For UAE-issued PCCs, lucidplus ensures that all necessary documents—such as passport copies, Emirates ID details, visa pages, and biometrics—are properly prepared and processed. For individuals who have already left the UAE, we facilitate fingerprint cards, embassy authentication, and verification through official channels so that the PCC can still be issued without the client’s physical presence in the country. For foreign PCCs, our team coordinates with consulates, police departments, immigration offices, and legal channels to secure the certificate within the required timeframe.
                  </p>
                  <p className='font-light'>
                    Once obtained, the PCC often needs to be attested before it can be used internationally. lucidplus seamlessly continues the process, completing embassy legalisation, MOFA approval, and any translation requirements. Our approach ensures that clients do not have to manage multiple authorities or worry about technical details—every step is handled with precision, confidentiality, and the highest degree of care.
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
