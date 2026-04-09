'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { useRef, useState, useEffect } from 'react';
import type { SwiperOptions } from 'swiper/types';
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import SignatureIcon from "../components/SignatureIcon";


interface Testimonial {
    name: string;
    role: string;
    rating: number;
    review: string;
    avatar: string;
}

// Example avatars (replace src paths with your actual assets)
const testimonialsItems = [
    {
        name: "Alex jonas",
        role: "JS Marketing",
        rating: 5.0,
        review: "The team understood our requirements perfectly and delivered a stunning website ahead of schedule. Communication was smooth throughout the project.",
        avatar: "/client1.png",
    },
    {
        name: "John Robert",
        role: "SM Strategy",
        rating: 5.0,
        review: "Our app launch went seamlessly thanks to their expertise. The final product exceeded our expectations and helped grow our business.",
        avatar: "/client1.png",
    },
    {
        name: "Maggie Hue",
        role: "BS Growth Ceo",
        rating: 4.8,
        review: "They quickly resolved our long-standing technical issues and  our site’s look. Highly recommend for their professionalism and problem-solving.",
        avatar: "/client1.png",
    },

    {
        name: "jack hamma",
        role: "JK Finance",
        rating: 5.0,
        review: "Exceptional service from start to finish! Updates were prompt and creative solutions made our platform stand out in a crowded market.",
        avatar: "/client1.png",
    },


];

export default function Testimonials() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Because refs might initially be null, delay setting navigation elements
    const [navigationReady, setNavigationReady] = useState(false);

    useEffect(() => {
        setNavigationReady(true);
    }, []);

    const fadeRef = useRef<HTMLHeadingElement>(null);
        useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);

        

    return (
        <section className="rounded-3xl testimonials-section overflow-hidden relative lg:py-24 py-14 ">
            <div className="mx-auto  max-w-[1360px] lg:pl-6  flex flex-col items-center justify-center">
               <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }} className="heading flex flex-col items-center max-w-[550px] mx-auto mb-10">
                    <div className="flex items-center gap-2 text-site mb-3 uppercase text-sm">
                        <SignatureIcon width={20} height={20} />
                       read reviews
                    </div>
                    <h2 ref={fadeRef} className="text-center fade-up-stagger text-3xl lg:text-[46px] font-medium mb-1 leading-tight text-site">
                       Stories of trust
                    </h2>
                </motion.div>

                <div className="w-full  lg:mt-6 flex gap-12">
                    <div className='min-w-[150px] hidden sm:block '>
                        <svg width="87" height="77" viewBox="0 0 87 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.6377 76.1558C56.7646 76.1558 54.0091 75.0144 51.9774 72.9827C49.9458 70.9511 48.8044 68.1956 48.8044 65.3224L48.8044 32.8224C48.8044 15.8683 57.7419 4.69368 74.5715 0.484939C75.2634 0.30635 75.9838 0.266418 76.6912 0.367461C77.3986 0.468505 78.079 0.708526 78.6933 1.07369C79.3075 1.43885 79.8434 1.92194 80.2701 2.49512C80.6968 3.06831 81.0059 3.72026 81.1796 4.41342C81.3532 5.10658 81.388 5.82725 81.2819 6.53391C81.1758 7.24058 80.9309 7.91926 80.5614 8.53088C80.1919 9.14249 79.705 9.67493 79.1287 10.0975C78.5525 10.5202 77.8984 10.8246 77.204 10.9933C65.1411 14.0103 59.6377 20.8895 59.6377 32.8224L59.6377 38.2391L75.8877 38.2391C78.6209 38.2382 81.2533 39.2705 83.2574 41.1289C85.2614 42.9873 86.489 45.5345 86.694 48.2599L86.7211 49.0724L86.7211 65.3224C86.7211 68.1956 85.5797 70.9511 83.5481 72.9828C81.5164 75.0144 78.7609 76.1558 75.8877 76.1558L59.6377 76.1558ZM10.8877 76.1558C8.01455 76.1558 5.25905 75.0144 3.2274 72.9827C1.19576 70.9511 0.0543906 68.1956 0.0543909 65.3224L0.0543937 32.8224C0.0543952 15.8683 8.9919 4.69368 25.8215 0.484934C26.5134 0.306345 27.2338 0.266413 27.9412 0.367457C28.6486 0.468501 29.329 0.708522 29.9433 1.07369C30.5575 1.43885 31.0934 1.92193 31.5201 2.49512C31.9468 3.06831 32.2559 3.72026 32.4296 4.41342C32.6032 5.10658 32.638 5.82725 32.5319 6.53391C32.4258 7.24057 32.1809 7.91925 31.8114 8.53087C31.4418 9.14248 30.955 9.67493 30.3787 10.0975C29.8025 10.5202 29.1484 10.8246 28.454 10.9933C16.3911 14.0103 10.8877 20.8895 10.8877 32.8224L10.8877 38.2391L27.1377 38.2391C29.8709 38.2382 32.5033 39.2705 34.5074 41.1289C36.5114 42.9873 37.739 45.5345 37.944 48.2599L37.9711 49.0724L37.9711 65.3224C37.9711 68.1956 36.8297 70.9511 34.7981 72.9827C32.7664 75.0144 30.0109 76.1558 27.1377 76.1558L10.8877 76.1558Z" fill="#00a8ff" />
                        </svg>

                        <h5 className='text-xl text-site mt-4 block'>What our<br></br>
                            Clients are<br></br>
                            saying</h5>
                        <div className='slider-arrows flex gap-4  mt-5'>
                            <span className='cursor-pointer' ref={prevRef}>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.6021C6.477 22.6021 2 18.1251 2 12.6021C2 7.07905 6.477 2.60205 12 2.60205C17.523 2.60205 22 7.07905 22 12.6021C22 18.1251 17.523 22.6021 12 22.6021Z" stroke="var(--siteColor)" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M13.5 17.1021L9 12.6021L13.5 8.10205" stroke="var(--siteColor)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                            <span className='cursor-pointer' ref={nextRef}>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.6021C17.523 22.6021 22 18.1251 22 12.6021C22 7.07905 17.523 2.60205 12 2.60205C6.477 2.60205 2 7.07905 2 12.6021C2 18.1251 6.477 22.6021 12 22.6021Z" stroke="var(--siteColor)" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M10.5 17.1021L15 12.6021L10.5 8.10205" stroke="var(--siteColor)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>

                        </div>

                    </div>
                    <div className='w-full cursor-grab text-white'>
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            } as SwiperOptions['navigation']}
                            onBeforeInit={(swiper) => {
                                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }
                            }}
                            speed={2000}
                            spaceBetween={16}
                            slidesPerView={1.2}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1.1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2.5 },
                            }}
                            loop={true}


                        >
                            {testimonialsItems.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="bg-[var(--siteColor)] rounded-2xl  p-4  lg:p-6  relative  flex flex-col h-full  ">

                                        <div className="flex items-center gap-2 mb-2">
                                            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15.942" cy="15.7316" r="15.1295" fill="white" />
                                                <g clipPath="url(#clip0_1036_537)">
                                                    <path d="M12.4845 5.08121C10.2064 5.87152 8.2417 7.37156 6.87908 9.361C5.51646 11.3504 4.82772 13.7244 4.91402 16.1342C5.00033 18.544 5.85713 20.8626 7.35858 22.7495C8.86003 24.6363 10.927 25.992 13.2558 26.6173C15.1439 27.1045 17.122 27.1259 19.0202 26.6796C20.7397 26.2934 22.3295 25.4672 23.6338 24.282C24.9913 23.0108 25.9766 21.3936 26.4839 19.6043C27.0352 17.6585 27.1333 15.6122 26.7707 13.6226H16.1683V18.0207H22.3085C22.1858 18.7221 21.9228 19.3916 21.5353 19.9891C21.1478 20.5865 20.6438 21.0997 20.0533 21.4978C19.3036 21.9938 18.4583 22.3275 17.572 22.4775C16.683 22.6428 15.7712 22.6428 14.8822 22.4775C13.9812 22.2912 13.1288 21.9194 12.3794 21.3856C11.1755 20.5334 10.2716 19.3227 9.79653 17.9263C9.31347 16.5037 9.31347 14.9615 9.79653 13.5389C10.1347 12.5417 10.6937 11.6338 11.4318 10.8829C12.2765 10.0079 13.3459 9.38236 14.5226 9.07505C15.6994 8.76774 16.9381 8.79049 18.1028 9.14082C19.0126 9.42012 19.8447 9.9081 20.5325 10.5659C21.2249 9.8771 21.916 9.18654 22.606 8.49421C22.9622 8.12191 23.3506 7.76743 23.7015 7.38623C22.6515 6.40914 21.419 5.64884 20.0747 5.1489C17.6267 4.26 14.9481 4.23612 12.4845 5.08121Z" fill="white" />
                                                    <path d="M12.4845 5.0811C14.9478 4.23543 17.6264 4.25869 20.0747 5.14701C21.4192 5.65034 22.6511 6.4143 23.6997 7.39503C23.3434 7.77623 22.9675 8.13249 22.6041 8.503C21.913 9.19297 21.2224 9.88055 20.5325 10.5658C19.8446 9.90799 19.0126 9.42001 18.1028 9.14071C16.9385 8.78915 15.6998 8.76508 14.5227 9.07114C13.3456 9.3772 12.2756 10.0016 11.43 10.8757C10.6918 11.6266 10.1329 12.5345 9.79472 13.5317L6.10205 10.6726C7.4238 8.05155 9.71233 6.04661 12.4845 5.0811Z" fill="#E33629" />
                                                    <path d="M5.12231 13.5047C5.32078 12.521 5.65029 11.5684 6.10203 10.6724L9.79469 13.5385C9.31163 14.9611 9.31163 16.5033 9.79469 17.9259C8.5644 18.8759 7.33351 19.8307 6.10203 20.7902C4.97116 18.5392 4.62627 15.9744 5.12231 13.5047Z" fill="#F8BD00" />
                                                    <path d="M16.1683 13.6206H26.7707C27.1333 15.6102 27.0352 17.6565 26.4839 19.6023C25.9766 21.3916 24.9913 23.0087 23.6338 24.28C22.4421 23.3501 21.245 22.4274 20.0533 21.4976C20.6441 21.0991 21.1484 20.5854 21.5359 19.9873C21.9234 19.3892 22.1862 18.719 22.3085 18.0169H16.1683C16.1665 16.5526 16.1683 15.0866 16.1683 13.6206Z" fill="#587DBD" />
                                                    <path d="M6.10028 20.7906C7.33176 19.8406 8.56265 18.8858 9.79295 17.9263C10.2689 19.3232 11.1742 20.5339 12.3794 21.3856C13.1311 21.9169 13.9853 22.2857 14.8875 22.4686C15.7765 22.6339 16.6883 22.6339 17.5773 22.4686C18.4637 22.3186 19.3089 21.9849 20.0587 21.4889C21.2504 22.4187 22.4474 23.3415 23.6391 24.2713C22.335 25.4572 20.7452 26.284 19.0255 26.6707C17.1273 27.117 15.1492 27.0956 13.2612 26.6084C11.7679 26.2097 10.3731 25.5068 9.16414 24.5439C7.88455 23.5279 6.83945 22.2477 6.10028 20.7906Z" fill="#319F43" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1036_537">
                                                        <rect width="22.8008" height="22.8008" fill="white" transform="translate(4.54163 4.33105)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            <div className='flex'>
                                                {[...Array(5)].map((star, i) => (
                                                    <svg key={i} width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.69399 3.00645C7.76833 2.85589 7.8833 2.72913 8.02591 2.64049C8.16852 2.55186 8.33308 2.50488 8.501 2.50488C8.66891 2.50488 8.83347 2.55186 8.97608 2.64049C9.11869 2.72913 9.23366 2.85589 9.30799 3.00645L10.829 6.08845L14.23 6.58245C14.3963 6.60643 14.5525 6.67646 14.681 6.78462C14.8095 6.89279 14.9052 7.03476 14.9573 7.19449C15.0093 7.35421 15.0156 7.52531 14.9754 7.68842C14.9352 7.85153 14.8502 8.00014 14.73 8.11745L12.268 10.5174L12.849 13.9044C12.8772 14.0699 12.8586 14.24 12.7953 14.3955C12.7319 14.5509 12.6264 14.6856 12.4905 14.7842C12.3547 14.8828 12.1939 14.9414 12.0265 14.9535C11.8591 14.9656 11.6916 14.9306 11.543 14.8524L8.501 13.2544L5.45899 14.8544C5.31025 14.9327 5.14254 14.9678 4.97488 14.9557C4.80722 14.9436 4.64631 14.8847 4.51037 14.7859C4.37443 14.687 4.26891 14.552 4.20574 14.3962C4.14258 14.2404 4.12431 14.0701 4.15299 13.9044L4.73299 10.5174L2.27299 8.11845C2.15277 8.00121 2.06775 7.85267 2.02753 7.68964C1.98732 7.5266 1.99352 7.35556 2.04543 7.19586C2.09735 7.03617 2.19291 6.89418 2.3213 6.78595C2.4497 6.67773 2.60581 6.60758 2.77199 6.58345L6.17199 6.08945L7.69399 3.00645Z" fill="url(#paint0_linear_1036_528)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1036_528" x1="15" y1="15.2364" x2="1.62499" y2="2.62445" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#FF6F47" />
                                                                <stop offset="1" stopColor="#FFCD0F" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>

                                                ))}
                                            </div>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 3.9043L8 6.9043H4L5 10.9043L2 12.9043L5 14.9043L4 18.9043H8L9 21.9043L12 19.9043L15 21.9043L16 18.9043H20L19 14.9043L22 12.9043L19 10.9043L20 6.9043H16L15 3.9043L12 5.9043L9 3.9043ZM16 8.9043L17 9.9043L10 16.9043L7 13.9043L8 12.9043L10 14.9043L16 8.9043Z" fill="#278CFF" />
                                            </svg>

                                        </div>

                                        <p className="mt-1  text-lg font-light2">&ldquo;{item.review}&rdquo;</p>
                                        <div className="flex items-center mt-3">
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="rounded-full mr-3 object-cover border border-[#23243b]"
                                            />
                                            <div>
                                                <div className="text-lg">{item.name}</div>
                                                <div className="text-xs font-light2">{item.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                 <AnimatedButton type="submit"
                              label="Write a review" className="w-fit  mt-12 md:mt-16" />


            </div>
        </section>
    );
}
