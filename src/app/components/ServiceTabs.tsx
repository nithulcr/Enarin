"use client";
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';

const services = [
    { href: "/services/Document-Attestation-Overview", label: "Document Attestation Overview" },
    { href: "/services/Educational-Certificate-Attestation", label: "Educational Certificate Attestation" },
    { href: "/services/Personal-Document-Attestation", label: "Personal Document Attestation" },
    { href: "/services/Commercial-Document-Attestation", label: "Commercial Document Attestation" },
    { href: "/services/MOFA-Attestation", label: "MOFA Attestation (UAE)" },
    { href: "/services/Apostille-Services", label: "Apostille Services" },
    { href: "/services/True-Copy-Attestation", label: "True Copy Attestation" },
    { href: "/services/Police-Clearence-Certificate", label: "Police Clearence Certificate" },
    { href: "/services/Translation-Services", label: "Translation Services" },
    { href: "/services/Country-Specific-Attestation-Services", label: "Country Specific Attestation Services" },
    { href: "/services/UAE-Issued-Document", label: "UAE-Issued Document" },
    { href: "/services/Family-Visa-Documentation-Support", label: "Family Visa Documentation Support" },
    { href: "/services/Business-Setup-Services", label: "Business Setup Services" },
    { href: "/services/Pro-Services", label: "Pro Services" },
    { href: "/services/Golder-Visa-Support-Services", label: "Golder Visa Support Services" },






];


export default function ServiceTabs() {
    const pathname = usePathname();
    return (
        <div className="pt-5 lg:pt-0 flex flex-col gap-5">
            <div className="bg-[var(--siteColor)] p-6 lg:p-8 rounded-[24px] hidden lg:block">
                <h4 className='text-2xl font-normal text-white mb-5'>Categories</h4>
                <div className="flex items-center flex-wrap gap-3 ">
                    {services.map((service) => (
                        <Link key={service.href} href={service.href}
                            className={`px-4 py-3 rounded-[10px] flex items-center text-sm lg:text-[16px] gap-2 justify-between w-full ${pathname === service.href ? 'bg-[#036072] active-service  text-white ' : 'bg-white'}`}
                        >
                            {service.label}
                            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M20.6378 13.125H4.375C4.14294 13.125 3.92038 13.2172 3.75628 13.3813C3.59219 13.5454 3.5 13.7679 3.5 14C3.5 14.2321 3.59219 14.4546 3.75628 14.6187C3.92038 14.7828 4.14294 14.875 4.375 14.875H20.6378L14.2555 21.2555C14.0912 21.4198 13.9989 21.6426 13.9989 21.875C13.9989 22.1074 14.0912 22.3302 14.2555 22.4945C14.4198 22.6588 14.6426 22.7511 14.875 22.7511C15.1074 22.7511 15.3302 22.6588 15.4945 22.4945L23.3695 14.6195C23.451 14.5382 23.5156 14.4417 23.5597 14.3354C23.6039 14.2291 23.6266 14.1151 23.6266 14C23.6266 13.8849 23.6039 13.771 23.5597 13.6646C23.5156 13.5583 23.451 13.4618 23.3695 13.3805L15.4945 5.50551C15.3302 5.3412 15.1074 5.2489 14.875 5.2489C14.6426 5.2489 14.4198 5.3412 14.2555 5.50551C14.0912 5.66981 13.9989 5.89265 13.9989 6.12501C13.9989 6.35736 14.0912 6.58021 14.2555 6.74451L20.6378 13.125Z" fill="black" />
                            </svg>

                        </Link>
                    ))}
                </div>
            </div>
            <a className="bg-[var(--siteColor)] px-6 py-4 lg:px-8 lg:py-5 rounded-[24px] text-white flex items-center justify-between gap-4">
               <span className='flex-none text-xl'> Get a quote</span>
                <Image
                            src="/whatsapp.png"
                            alt="Business for Success"
                            width={50}
                            height={50}
                            className="object-contain  w-8 h-8"
                          />
            </a>
        </div>
    );
}