"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import PhoneIcon from "./PhoneIcon";



const navItems = [
    { href: "/", label: "Home" },
    { href: "#", label: "About us" },


    {
        label: "Services",
        href: "#",
        submenu: [
            { href: "", label: "Outsourcing and Offshoring" },
            { href: "", label: "Business Consulting & Management" },
            { href: "", label: "Branding & Marketing" },
            { href: "", label: "Administration & Customer Care" },
            { href: "", label: "Accounting & Taxation" },
            { href: "", label: "InformationTechnology" },
             { href: "", label: "Information Technology" },


        ],
    },
    { href: "#", label: "Business Projects" },
    { href: "#", label: "Contact Us" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [animation, setAnimation] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
    const pathname = usePathname();

    const handleMenuToggle = () => {
        if (open) {
            setAnimation("animate-menuSlideUp");
            setTimeout(() => {
                setOpen(false);
                setAnimation(null);
            }, 300);
        } else {
            setOpen(true);
            setAnimation("animate-menuSlideDown");
        }
    };

    useEffect(() => {
        if (pathname === "/") {
            document.body.classList.add("index-page");
        } else {
            document.body.classList.remove("index-page");
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const hasDropdownOpen = Object.values(openDropdowns).some(Boolean);



    return (
        <header
            className={[
                "content-center fixed top-0 left-0 z-50 transition-colors duration-600 bg-nav w-full",
                scrolled ? "bg-nav-cover" : "",
                pathname === "/" ? "index" : "others",
                (open || hasDropdownOpen) ? "header-menu-open" : "", // <- new class
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {pathname === "/" && (
                <div className="w-full bg-[var(--siteColor)] hidden min-[990px]:block">
                    <div className="text-white grid grid-cols-2 items-center text-sm max-w-[1360px] mx-auto">
                        <div className="h-full">
                            <div className="h-full max-w-[660px] flex items-center space-x-6 top-header-left relative px-6 py-2">
                                <p className="font-light">Are You Ready to Become an Affiliate Partner?</p>
                                <a href="#" className="flex items-center space-x-2 font-semibold pr-5">
                                    Contact Us
                                    <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.793 7.50002H2.5C2.36739 7.50002 2.24021 7.5527 2.14645 7.64647C2.05268 7.74024 2 7.86741 2 8.00002C2 8.13263 2.05268 8.25981 2.14645 8.35357C2.24021 8.44734 2.36739 8.50002 2.5 8.50002H11.793L8.146 12.146C8.05211 12.2399 7.99937 12.3672 7.99937 12.5C7.99937 12.6328 8.05211 12.7601 8.146 12.854C8.23989 12.9479 8.36722 13.0007 8.5 13.0007C8.63278 13.0007 8.76011 12.9479 8.854 12.854L13.354 8.35402C13.4006 8.30758 13.4375 8.2524 13.4627 8.19165C13.4879 8.13091 13.5009 8.06579 13.5009 8.00002C13.5009 7.93425 13.4879 7.86913 13.4627 7.80839C13.4375 7.74764 13.4006 7.69247 13.354 7.64602L8.854 3.14602C8.76011 3.05213 8.63278 2.99939 8.5 2.99939C8.36722 2.99939 8.23989 3.05213 8.146 3.14602C8.05211 3.23991 7.99937 3.36725 7.99937 3.50002C7.99937 3.6328 8.05211 3.76013 8.146 3.85402L11.793 7.50002Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="h-full">
                            <div className="max-w-[700px] h-full flex items-center justify-end overflow-hidden gap-4 relative px-6">
                                <div className="items-center justify-center space-x-2 flex relative py-2 h-full">
                                    <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8923 2.29199C15.2793 2.29199 17.5685 3.2402 19.2563 4.92803C20.9441 6.61586 21.8923 8.90504 21.8923 11.292C21.8923 14.366 20.2163 16.882 18.4503 18.687C17.568 19.5791 16.6053 20.3878 15.5743 21.103L15.1483 21.393L14.9483 21.526L14.5713 21.766L14.2353 21.971L13.8193 22.213C13.537 22.3742 13.2175 22.4589 12.8923 22.4589C12.5672 22.4589 12.2477 22.3742 11.9653 22.213L11.5493 21.971L11.0293 21.651L10.8373 21.526L10.4273 21.253C9.31517 20.5005 8.27924 19.6411 7.33433 18.687C5.56833 16.881 3.89233 14.366 3.89233 11.292C3.89233 8.90504 4.84055 6.61586 6.52837 4.92803C8.2162 3.2402 10.5054 2.29199 12.8923 2.29199ZM12.8923 8.29199C12.4984 8.29199 12.1083 8.36959 11.7443 8.52035C11.3803 8.67112 11.0496 8.8921 10.771 9.17067C10.4924 9.44925 10.2715 9.77996 10.1207 10.1439C9.96993 10.5079 9.89233 10.898 9.89233 11.292C9.89233 11.686 9.96993 12.0761 10.1207 12.44C10.2715 12.804 10.4924 13.1347 10.771 13.4133C11.0496 13.6919 11.3803 13.9129 11.7443 14.0636C12.1083 14.2144 12.4984 14.292 12.8923 14.292C13.688 14.292 14.451 13.9759 15.0137 13.4133C15.5763 12.8507 15.8923 12.0876 15.8923 11.292C15.8923 10.4963 15.5763 9.73328 15.0137 9.17067C14.451 8.60806 13.688 8.29199 12.8923 8.29199Z" fill="#f1f1f1" />
                                    </svg>

                                    <span className="font-light">Kerala | Dubai</span>
                                </div>
                                <span className="font-light"> | </span>
                                <div className="flex flex-row gap-4 relative h-full header-top-social items-center">

                                    <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer" className="w-5 h-5">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.9281 12.1257C23.9281 5.68565 18.7015 0.458984 12.2615 0.458984C5.82147 0.458984 0.594803 5.68565 0.594803 12.1257C0.594803 17.7723 4.60814 22.474 9.92814 23.559V15.6257H7.5948V12.1257H9.92814V9.20899C9.92814 6.95732 11.7598 5.12565 14.0115 5.12565H16.9281V8.62565H14.5948C13.9531 8.62565 13.4281 9.15065 13.4281 9.79232V12.1257H16.9281V15.6257H13.4281V23.734C19.3198 23.1507 23.9281 18.1807 23.9281 12.1257Z" fill="white" />
                                        </svg>

                                    </a>
                                    <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer" className="w-5 h-5">
                                        <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.028 0.977539C12.153 0.980539 12.724 0.986539 13.217 1.00054L13.411 1.00754C13.635 1.01554 13.856 1.02554 14.123 1.03754C15.187 1.08754 15.913 1.25554 16.55 1.50254C17.21 1.75654 17.766 2.10054 18.322 2.65554C18.8307 3.15527 19.2242 3.76001 19.475 4.42754C19.722 5.06454 19.89 5.79054 19.94 6.85554C19.952 7.12154 19.962 7.34254 19.97 7.56754L19.976 7.76154C19.991 8.25354 19.997 8.82454 19.999 9.94954L20 10.6955V12.0055C20.0024 12.7349 19.9948 13.4643 19.977 14.1935L19.971 14.3875C19.963 14.6125 19.953 14.8335 19.941 15.0995C19.891 16.1645 19.721 16.8895 19.475 17.5275C19.2242 18.1951 18.8307 18.7998 18.322 19.2995C17.8223 19.8082 17.2175 20.2017 16.55 20.4525C15.913 20.6995 15.187 20.8675 14.123 20.9175L13.411 20.9475L13.217 20.9535C12.724 20.9675 12.153 20.9745 11.028 20.9765L10.282 20.9775H8.97299C8.24325 20.9801 7.51351 20.9724 6.78399 20.9545L6.58999 20.9485C6.3526 20.9395 6.11526 20.9292 5.87799 20.9175C4.81399 20.8675 4.08799 20.6995 3.44999 20.4525C2.78282 20.2016 2.17843 19.8081 1.67899 19.2995C1.16993 18.7999 0.776098 18.1952 0.524989 17.5275C0.277989 16.8905 0.109989 16.1645 0.0599889 15.0995L0.0299889 14.3875L0.0249891 14.1935C0.0065551 13.4644 -0.00177913 12.735 -1.1037e-05 12.0055V9.94954C-0.00277893 9.22014 0.00455518 8.49074 0.021989 7.76154L0.028989 7.56754C0.036989 7.34254 0.046989 7.12154 0.058989 6.85554C0.108989 5.79054 0.276989 5.06554 0.523989 4.42754C0.775683 3.75974 1.17021 3.15498 1.67999 2.65554C2.17914 2.14709 2.78318 1.75361 3.44999 1.50254C4.08799 1.25554 4.81299 1.08754 5.87799 1.03754C6.14399 1.02554 6.36599 1.01554 6.58999 1.00754L6.78399 1.00154C7.51318 0.983772 8.24258 0.976104 8.97199 0.978539L11.028 0.977539ZM9.99999 5.97754C8.67391 5.97754 7.40214 6.50432 6.46446 7.44201C5.52677 8.37969 4.99999 9.65146 4.99999 10.9775C4.99999 12.3036 5.52677 13.5754 6.46446 14.5131C7.40214 15.4508 8.67391 15.9775 9.99999 15.9775C11.3261 15.9775 12.5978 15.4508 13.5355 14.5131C14.4732 13.5754 15 12.3036 15 10.9775C15 9.65146 14.4732 8.37969 13.5355 7.44201C12.5978 6.50432 11.3261 5.97754 9.99999 5.97754ZM9.99999 7.97754C10.394 7.97747 10.7841 8.05501 11.1481 8.20571C11.5121 8.35641 11.8428 8.57734 12.1215 8.85587C12.4001 9.13439 12.6211 9.46508 12.7719 9.82903C12.9228 10.193 13.0004 10.5831 13.0005 10.977C13.0006 11.371 12.923 11.7611 12.7723 12.1251C12.6216 12.4891 12.4007 12.8199 12.1222 13.0985C11.8436 13.3771 11.513 13.5982 11.149 13.749C10.785 13.8998 10.395 13.9775 10.001 13.9775C9.20534 13.9775 8.44228 13.6615 7.87967 13.0989C7.31706 12.5363 7.00099 11.7732 7.00099 10.9775C7.00099 10.1819 7.31706 9.41883 7.87967 8.85622C8.44228 8.29361 9.20534 7.97754 10.001 7.97754M15.251 4.47754C14.9195 4.47754 14.6015 4.60924 14.3671 4.84366C14.1327 5.07808 14.001 5.39602 14.001 5.72754C14.001 6.05906 14.1327 6.377 14.3671 6.61142C14.6015 6.84584 14.9195 6.97754 15.251 6.97754C15.5825 6.97754 15.9005 6.84584 16.1349 6.61142C16.3693 6.377 16.501 6.05906 16.501 5.72754C16.501 5.39602 16.3693 5.07808 16.1349 4.84366C15.9005 4.60924 15.5825 4.47754 15.251 4.47754Z" fill="white" />
                                        </svg>

                                    </a>
                                    <a href="https://www.instagram.com" aria-label="X" target="_blank" rel="noopener noreferrer" className="w-5 h-5">
                                        <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1036_725)">
                                                <mask id="mask0_1036_725" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="19">
                                                    <path d="M0 0.977539H18V18.9775H0V0.977539Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask0_1036_725)">
                                                    <path d="M14.175 1.82129H16.9354L10.9054 8.73072L18 18.1344H12.4457L8.09229 12.4323L3.11657 18.1344H0.353571L6.80271 10.7416L0 1.82257H5.69571L9.62486 7.03357L14.175 1.82129ZM13.2043 16.4784H14.7343L4.86 3.39115H3.21943L13.2043 16.4784Z" fill="white" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1036_725">
                                                    <rect width="18" height="18" fill="white" transform="translate(0 0.977539)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </a>
                                    <a href="https://linkedin.com" aria-label="Linkedin" target="_blank" rel="noopener noreferrer" className="w-5 h-5">
                                        <svg width="24" height="24" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15 0.977539C15.7956 0.977539 16.5587 1.29361 17.1213 1.85622C17.6839 2.41883 18 3.18189 18 3.97754V15.9775C18 16.7732 17.6839 17.5363 17.1213 18.0989C16.5587 18.6615 15.7956 18.9775 15 18.9775H3C2.20435 18.9775 1.44129 18.6615 0.87868 18.0989C0.316071 17.5363 0 16.7732 0 15.9775V3.97754C0 3.18189 0.316071 2.41883 0.87868 1.85622C1.44129 1.29361 2.20435 0.977539 3 0.977539H15ZM5 7.97754C4.73478 7.97754 4.48043 8.0829 4.29289 8.27043C4.10536 8.45797 4 8.71232 4 8.97754V13.9775C4 14.2428 4.10536 14.4971 4.29289 14.6846C4.48043 14.8722 4.73478 14.9775 5 14.9775C5.26522 14.9775 5.51957 14.8722 5.70711 14.6846C5.89464 14.4971 6 14.2428 6 13.9775V8.97754C6 8.71232 5.89464 8.45797 5.70711 8.27043C5.51957 8.0829 5.26522 7.97754 5 7.97754ZM8 6.97754C7.73478 6.97754 7.48043 7.0829 7.29289 7.27043C7.10536 7.45797 7 7.71232 7 7.97754V13.9775C7 14.2428 7.10536 14.4971 7.29289 14.6846C7.48043 14.8722 7.73478 14.9775 8 14.9775C8.26522 14.9775 8.51957 14.8722 8.70711 14.6846C8.89464 14.4971 9 14.2428 9 13.9775V10.3175C9.305 9.97354 9.82 9.56954 10.393 9.32454C10.726 9.18254 11.227 9.12454 11.575 9.23454C11.6904 9.26383 11.7933 9.3298 11.868 9.42254C11.92 9.49254 12 9.64854 12 9.97754V13.9775C12 14.2428 12.1054 14.4971 12.2929 14.6846C12.4804 14.8722 12.7348 14.9775 13 14.9775C13.2652 14.9775 13.5196 14.8722 13.7071 14.6846C13.8946 14.4971 14 14.2428 14 13.9775V9.97754C14 9.30754 13.83 8.71154 13.476 8.23354C13.1503 7.8001 12.6944 7.48226 12.175 7.32654C11.273 7.04354 10.274 7.20054 9.607 7.48654C9.39347 7.57838 9.18545 7.68256 8.984 7.79854C8.94208 7.56813 8.82062 7.35974 8.6408 7.2097C8.46097 7.05967 8.23419 6.9775 8 6.97754ZM5 4.97754C4.73478 4.97754 4.48043 5.0829 4.29289 5.27043C4.10536 5.45797 4 5.71232 4 5.97754C4 6.24276 4.10536 6.49711 4.29289 6.68465C4.48043 6.87218 4.73478 6.97754 5 6.97754C5.26522 6.97754 5.51957 6.87218 5.70711 6.68465C5.89464 6.49711 6 6.24276 6 5.97754C6 5.71232 5.89464 5.45797 5.70711 5.27043C5.51957 5.0829 5.26522 4.97754 5 4.97754Z" fill="white" />
                                        </svg>

                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div
                className={
                    "second-header  w-full " +
                    (scrolled ? "" : "") +
                    (pathname === "/" ? "" : "")
                }
            >
                <div className="max-w-[1360px]  mx-auto flex items-center justify-between md:px-6 px-3 h-[80px] main-header z-10 relative">
                    <div className="lg:w-[240px] text-2xl font-bold h-full align-content-center flex">
                        <Link href="/" className="items-center flex">
                            <img src="/logo-white.png" alt="Logo" width={220} height={50} className="w-[180px] md:w-[220px] logo logo-black" />
                            <img src="/logo.png" alt="Logo" width={220} height={50} className="w-[180px] md:w-[220px] logo logo-white" />

                        </Link>
                    </div>
                    <div className="items-center gap-3 lg:gap-10 flex items-center h-full">
                        <nav className="hidden lg:flex gap-4 xl:gap-6 h-full">
                            {navItems.map((item) =>
                                item.submenu ? (
                                    <div
                                        key={`${item.label}-${item.href}`}

                                        className="relative h-full flex items-center"
                                        onMouseEnter={() => setOpenDropdowns((prev) => ({ ...prev, [item.label]: true }))}
                                        onMouseLeave={() => setOpenDropdowns((prev) => ({ ...prev, [item.label]: false }))}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`place-items-center menu-text h-full flex transition-colors duration-300  text-md menu-item ${pathname === item.href ? "menu-active" : ""
                                                }`}
                                        >
                                            {item.label}
                                            <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${openDropdowns[item.label] ? "rotate-180" : ""}`} />
                                        </Link>
                                        {openDropdowns[item.label] && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 w-[80vw] max-w-5xl bg-white  shadow-lg z-60"
                                            >
                                                <div className="p-6 grid grid-cols-3 gap-x-8 gap-y-1">
                                                    {item.submenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.label}
                                                            href={subItem.href}
                                                            className={`block py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md px-4 ${pathname === subItem.href ? "megamenu-active-tab" : ""
                                                                }`}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={`${item.label}-${item.href}`}

                                        href={item.href}
                                        className={`place-items-center flex transition-colors duration-300  text-md menu-item ${pathname === item.href ? "menu-active" : ""
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </nav>



                    </div>
                    <div className="lg:w-[240px] items-center gap-3 lg:gap-10 flex items-center h-full">
                       

                        <div className="flex items-center gap-3 md:gap-5 ml-auto">
                            <a href="tel:+1234567890" className="inline-flex items-center gap-2 ph-icon">
                                <PhoneIcon width={20} height={20} />
                            </a>
                            <a href="tel:+1234567890" className="inline-flex md:hidden items-center gap-2 ph-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" className="whatsapp2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.05 4.90999C18.1331 3.9841 17.041 3.24996 15.8375 2.75036C14.634 2.25075 13.3431 1.99568 12.04 1.99999C6.57999 1.99999 2.12999 6.44999 2.12999 11.91C2.12999 13.66 2.58999 15.36 3.44999 16.86L2.04999 22L7.29999 20.62C8.74999 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.26999 20.92 6.77999 19.05 4.90999ZM12.04 20.15C10.56 20.15 9.10999 19.75 7.83999 19L7.53999 18.82L4.41999 19.64L5.24999 16.6L5.04999 16.29C4.22754 14.9771 3.79091 13.4593 3.78999 11.91C3.78999 7.36999 7.48999 3.66999 12.03 3.66999C14.23 3.66999 16.3 4.52999 17.85 6.08999C18.6176 6.85386 19.2259 7.76254 19.6396 8.76332C20.0533 9.76411 20.2642 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.18C14.64 13.1 14.48 13.06 14.31 13.3C14.14 13.55 13.67 14.11 13.53 14.27C13.39 14.44 13.24 14.46 12.99 14.33C12.74 14.21 11.94 13.94 11 13.1C10.26 12.44 9.76999 11.63 9.61999 11.38C9.47999 11.13 9.59999 11 9.72999 10.87C9.83999 10.76 9.97999 10.58 10.1 10.44C10.22 10.3 10.27 10.19 10.35 10.03C10.43 9.85999 10.39 9.71999 10.33 9.59999C10.27 9.47999 9.76999 8.25999 9.56999 7.75999C9.36999 7.27999 9.15999 7.33999 9.00999 7.32999H8.52999C8.35999 7.32999 8.09999 7.38999 7.86999 7.63999C7.64999 7.88999 7.00999 8.48999 7.00999 9.70999C7.00999 10.93 7.89999 12.11 8.01999 12.27C8.13999 12.44 9.76999 14.94 12.25 16.01C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.69 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.03 14.27C16.96 14.16 16.81 14.11 16.56 13.99Z" fill="#09424D" />
                                </svg>
                            </a>
                            <div className="hidden md:flex">
                                <AnimatedButton href="https://wa.me/123456789" label="Let's Chat" className=" w-fit whatsapp-btn" />
                            </div>
                        </div>
                        <button
                            onClick={handleMenuToggle}
                            className={`flex flex-col gap-2 lg:hidden hamburger ${open ? "open" : ""}`}
                        >
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`mob-menu lg:hidden bg-[var(--background)] font-light px-4 pt-12 pb-20  shadow-md transition-all duration-300 origin-top ${animation}`}
                >
                    {navItems.map((item) =>
                        item.submenu ? (
                            <div key={item.href} className="p-2">
                                <div
                                    className="flex justify-between items-center "
                                    onClick={() => setOpenDropdowns((prev) => ({ ...prev, [item.label]: !openDropdowns[item.label] }))}
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${openDropdowns[item.label] ? "rotate-180" : ""}`} />
                                </div>
                                {openDropdowns[item.label] && (
                                    <div className="pl-1 mt-2 space-y-1">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.href}
                                                className={`block p-2 rounded-lg ${pathname === subItem.href ? "megamenu-active-tab" : ""
                                                    }`}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block hover:text-[var(--siteColor)] p-2 rounded-lg ${pathname === item.href ? "text-[var(--siteColor)] megamenu-active-tab" : ""}`}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </motion.div>
            )}
            <div className="bg-header-cover"></div>
        </header>
    );
}
