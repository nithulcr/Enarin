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
import Hero2 from "../components/Hero2";

import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";







export default function Home() {
  return (
    <>
      <Header />
      <Hero2
        heading_en="Contact"

        breadcrumbPosition="left"
      />
     
      <ContactUs />


      <Footer />
    </>
  );
}