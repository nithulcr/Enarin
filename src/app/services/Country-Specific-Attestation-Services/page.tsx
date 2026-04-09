import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Country Specific Attestation-Services',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function CountrySpecific() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Country Specific Attestation-Services"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Country Specific Attestation-Services</h1>
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
                    Every country follows its own unique procedures for document attestation, and understanding these differences is essential to completing the process correctly. lucidplus Attestation provides country-specific attestation support, carefully tailored to the rules and requirements of each issuing nation. Our global network enables us to manage documents from more than 50 countries, ensuring smooth movement through universities, ministries, embassies, and legal departments.
                  </p>


                </div>
                <div className='flex flex-col gap-6 my-7'>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>India</h5>
                      <p className=' font-light'>Indian documents follow a structured system that often includes university verification for educational certificates, state-level authentication for personal documents, and Chamber of Commerce approvals for commercial papers. Only after these steps can the documents proceed to the Ministry of External Affairs and the UAE Embassy. lucidplus coordinates every stage, ensuring timely and complete verification.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Philippines</h5>
                      <p className=' font-light'>Philippines documents undergo strict authentication through the Department of Foreign Affairs (DFA). Whether it is a birth certificate, diploma, or NBI clearance, each requires proper validation before UAE Embassy stamping. We manage DFA appointments, processing, and embassy legalisation to make the experience smooth and efficient.</p>
                    </div>

                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Pakistan</h5>
                      <p className=' font-light'>Pakistani documents typically pass through the Higher Education Commission (HEC), the Ministry of Foreign Affairs of Pakistan, and the UAE Embassy. Educational qualifications require verification of degrees directly from universities. lucidplus handles every requirement, ensuring that clients do not face delays due to incomplete steps.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>United Kingdom</h5>
                      <p className=' font-light'>The UK follows a notary-driven process that leads to Foreign Commonwealth Office (FCO) legalisation before reaching the UAE Embassy. The documents must meet UK notarial standards, which our team ensures before submission. The attested document is then legalised by the MOFA UAE for final acceptance.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Philippines</h5>
                      <p className=' font-light'>Philippines documents undergo strict authentication through the Department of Foreign Affairs (DFA). Whether it is a birth certificate, diploma, or NBI clearance, each requires proper validation before UAE Embassy stamping. We manage DFA appointments, processing, and embassy legalisation to make the experience smooth and efficient.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>United States of America</h5>
                      <p className=' font-light'>The USA has one of the most detailed attestation routes due to its federal structure. Documents often require county-level certification, state validation, Department of State approval, and UAE Embassy legalisation. This multi-level journey can be overwhelming, but lucidplus manages every detail with clarity and expertise.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Canada</h5>
                      <p className=' font-light'>Canadian documents follow a similar structured process involving notarization, authentication through Global Affairs Canada, and UAE Embassy legalisation. lucidplus ensures that educational, personal, and corporate documents meet all the technical requirements set by Canadian authorities.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Europe</h5>
                      <p className=' font-light'>Documents from European countries often undergo validation through their Ministry of Justice or Ministry of Foreign Affairs before being legalised by the UAE Embassy. Whether the document originates from Germany, France, Italy, the Netherlands, or Scandinavian countries, lucidplus ensures full compliance with European legalisation standards.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>Africa</h5>
                      <p className=' font-light'>African countries follow diverse attestation processes depending on their local administrative structure. lucidplus manages documentation from Nigeria, Kenya, Ghana, South Africa, and others, ensuring every verification step is completed accurately, even when local procedures vary widely.</p>
                    </div>
                    <div className='bg-white p-5 lg:p-7 rounded-2xl  text-sm '>

                      <h5 className='text-lg md:text-xl font-semibold mb-2'>GCC Countries</h5>
                      <p className=' font-light'>Documents from Saudi Arabia, Bahrain, Kuwait, Qatar, and Oman follow their own government authentication pathways. lucidplus offers cross-border attestation for GCC nations, ensuring documents can be used either within the UAE or internationally.</p>
                    </div>


                  </div>

                </div>
                <div className=' flex flex-col gap-4'>
                  
                      <p className='font-light'>
                        By tailoring our process to each country’s requirements, lucidplus provides unparalleled clarity and precision in global attestation.
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
