
import { Metadata, ResolvingMetadata } from 'next';



export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {

  const metadata: Metadata = {
    title: 'Enarin',
    description: '',
    keywords: '',
  };

  return metadata;
}

import Header from "../components/Header";
import ServicesFull from "../components/ServicesFull";
import Hero2 from "../components/Hero2";


import Footer from "../components/Footer";





export default function Services() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Services"

        breadcrumbPosition="left"
      />
      <ServicesFull />


      <Footer />
    </>
  );
}
