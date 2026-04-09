import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";



export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Lucid plus | Business Setup Services',
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
        heading_en="Business Setup Services"

        breadcrumbPosition="left"
      />
      <section className="py-14 lg:py-24   service-section relative">

        <div className="max-w-[1360px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-8 lg:col-span-2'>
            <div>
              <h1 className='text-[20px] lg:text-[30px]  font-semibold mb-1 leading-tight max-w-[600px]'>Business Setup Services</h1>
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
                    Starting a business in the UAE is a remarkable opportunity. The country’s dynamic economy, strategic geographic location, tax benefits, and global connectivity make it one of the most attractive business destinations in the world. Yet, behind the promise of success lies a detailed path of approvals, legal clearances, documentation requirements, and licensing procedures that can overwhelm even the most experienced entrepreneurs. Understanding this complexity, lucidplus provides a complete business setup support system designed to make company formation effortless, transparent, and fast.
                  </p>
                  <p className='font-light'>
                    When a business idea takes shape, our role begins with guiding entrepreneurs through the UAE’s different company structures—mainland, freezone, and offshore. Each structure comes with its own advantages, regulations, cost considerations, and operational freedoms. lucidplus takes the time to understand your business model, commercial goals, and future expansion plans before recommending the most suitable formation route.
                  </p>
                  <p className='font-light'>
                    Once the decision is made, we manage the entire documentation cycle. This includes name reservation, activity approvals, drafting agreements, attesting corporate documents, securing initial permissions, preparing applications, coordinating with government departments, and ensuring compliance with legal frameworks. Every document—whether a passport copy, shareholder agreement, MOA, AOA, tenancy contract, bank reference, or corporate resolution—is meticulously checked and processed.
                  </p>
                  <p className='font-light'>
                    lucidplus also assists with office space requirements, obtaining Ejari or lease contracts when needed, and managing investor visas and employee visas associated with the new company. Our role extends beyond the initial setup. We support renewals, modifications, license upgrades, and approvals required for business expansion. By handling the administrative foundation of the company, lucidplus allows entrepreneurs to focus on their 
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
