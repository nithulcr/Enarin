"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import AnimatedButton from "./AnimatedButton";


const partnersEn = [
  {
    id: "01",
    icon: "/partners/1.png",

  },
  {
    id: "02",
    icon: "/partners/2.png",

  },
  {
    id: "03",
    icon: "/partners/3.png",

  },
  {
    id: "04",
    icon: "/partners/4.png",

  },
  {
    id: "05",
    icon: "/partners/5.png",

  },
  {
    id: "06",
    icon: "/partners/6.png",

  },
  {
    id: "07",
    icon: "/partners/7.png",

  },
  {
    id: "08",
    icon: "/partners/5.png",

  },

];

const Partners = () => {
  const partners = partnersEn;

  return (
    <section className="py-14 lg:py-24 text-[var(--foreground)]">
      <div className="max-w-[1320px] mx-auto px-6 flex  flex-col items-start  gap-5 justify-between mb-10">
        <div className="w-full lg:flex justify-between gap-4 items-center">
          <h2 className="text-3xl lg:text-[46px] font-medium max-w-[560px] mb-5 md:mb-0">Empowering Success with
            Top One&apos;s Expertise.</h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* <p className="max-w-[560px] ">

              Our core services redefine business success. From expert business setup solutions and strategic growth planning to personalized consultancy, we offer a holistic approach that caters to your unique needs.
            </p> */}
            <AnimatedButton href="" label="Talk with Us" className="w-fit text-white reverse-flex" />
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] mx-auto lg:px-6 partners-container lg:hidden px-6   ">
        <div className="bg-[#F6F6F6] p-4 lg:m-0 rounded-xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            className=""

          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="bg-white rounded-xl p-3 text-center  p-5 transition-all duration-300 relative top-0 hover:top-[-6px]">
                  <Image
                    src={partner.icon}
                    alt="logo"
                    className="w-15 h-15 object-contain mx-auto mb-2"
                    width={80}
                    height={80}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
      <div className="max-w-[1320px] mx-auto hidden lg:block px-6">
        <div className="  p-4 lg:p-8 partners-container rounded-2xl  bg-[#F6F6F6]">
          <div className="grid grid-cols-4 gap-4">

            {partners.map((partner) => (
              <div key={partner.id}>
                <div className="rounded-lg bg-white p-6 flex  items-center justify-center  transition-all duration-300 relative top-0 hover:top-[-6px]">
                  <Image
                    src={partner.icon}
                    alt="logo"
                    className="w-full h-12 object-contain mx-auto mb-2"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
