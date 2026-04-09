import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Pro Services',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function ProServices() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Pro Services"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Pro Services</h1>
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
                    Public Relations Officer (PRO) services are essential to navigating the UAE’s government processes. For many individuals and companies, dealing with immigration departments, labour offices, licensing authorities, and other government systems can feel confusing and time-consuming. lucidplus provides a complete PRO service framework that removes this burden entirely, ensuring that every government-related task is completed smoothly and professionally.
                  </p>
                  <p className='font-light'>
                  For individuals, PRO support begins the moment they arrive in the UAE. From visa stamping and medical tests to Emirates ID biometric procedures, residency renewals, family visa applications, and visa cancellations, we manage each requirement with a streamlined approach. Clients no longer need to understand government portals, book appointments, or physically visit service centres—lucidplus takes responsibility for the entire journey.                  </p>
                  <p className='font-light'>
                    Businesses benefit even more from PRO services. UAE companies are required to maintain accurate compliance records with immigration, labour, and licensing authorities. Failure to do so can result in penalties, delays, or legal complications. lucidplus ensures that every requirement—from employee visa processing and labour approvals to establishment card renewals, company license updates, and immigration card management—is executed without error. By taking over these responsibilities, we free companies from administrative pressure and enable them to focus on productivity and growth.
                  </p>
                   <p className='font-light'>
                    lucidplus has built a trusted name in PRO solutions by combining precision, speed, and reliability. We monitor deadlines, prepare documentation in advance, schedule government appointments, and track every application until completion. For both individuals and 
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
