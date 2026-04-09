"use client";
import Link from "next/link";
import { motion } from "framer-motion";


interface Hero2Props {
    heading_en: string;
    breadcrumbPosition?: "left" | "center" | "right";
}

const Hero2 = ({
    heading_en,

    breadcrumbPosition = "left",
}: Hero2Props) => {

    // Choose based on language
    const heading = heading_en;
    const breadcrumbText = heading_en;


    // Breadcrumb alignment
    const breadcrumbAlignClass =
        breadcrumbPosition === "center"
            ? "justify-center"
            : breadcrumbPosition === "right"
                ? "justify-end"
                : "justify-start";

    return (
        <section className="mt-[80px]  overflow-hidden w-full bg-[var(--green)]  flex flex-col justify-center items-center text-center relative">
            <div
                className={`hero2-bg absolute inset-0 bg-[url('/hero2.png')] bg-[cover]`}
            ></div>

            <motion.div initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative z-10 py-8 lg:py-14 flex flex-col justify-center items-center w-full max-w-7xl min-h-[200px] lg:min-h-[340px] px-6 items-${breadcrumbPosition} text-${breadcrumbPosition}`}
            >
                <h2 className="text-3xl lg:text-5xl leading-tight font-medium text-center text-white max-w-[700px]">
                    {heading}
                </h2>


                {(breadcrumbText ?? heading) && (
                    <div className={`flex items-center gap-2 breadcrumb mt-3 lg:mt-6 px-7 py-[2px] bg-[#D5E5E3] rounded-3xl text-black ${breadcrumbAlignClass}`}>
                        <Link href="/" className="text-sm lg:text-md  my-1 font-light">
                            Home
                        </Link>

                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.1025 4.10249C10.208 3.99716 10.3509 3.93799 10.5 3.93799C10.6491 3.93799 10.792 3.99716 10.8975 4.10249L15.3975 8.60249C15.5028 8.70796 15.562 8.85093 15.562 8.99999C15.562 9.14906 15.5028 9.29202 15.3975 9.39749L10.8975 13.8975C10.846 13.9528 10.7839 13.9971 10.7149 14.0278C10.6459 14.0586 10.5714 14.0751 10.4959 14.0764C10.4204 14.0778 10.3453 14.0639 10.2753 14.0356C10.2053 14.0073 10.1416 13.9652 10.0882 13.9118C10.0348 13.8584 9.9927 13.7947 9.96441 13.7247C9.93612 13.6546 9.92222 13.5796 9.92356 13.5041C9.92489 13.4286 9.94142 13.3541 9.97216 13.2851C10.0029 13.2161 10.0472 13.154 10.1025 13.1025L13.6425 9.56249H3C2.85082 9.56249 2.70774 9.50323 2.60225 9.39774C2.49676 9.29225 2.4375 9.14918 2.4375 8.99999C2.4375 8.85081 2.49676 8.70774 2.60225 8.60225C2.70774 8.49676 2.85082 8.43749 3 8.43749H13.6425L10.1025 4.89749C9.99716 4.79202 9.93799 4.64906 9.93799 4.49999C9.93799 4.35093 9.99716 4.20796 10.1025 4.10249Z" fill="black" />
                            </svg>


                        </div>

                        <span className="text-xs lg:text-md  my-1 font-normal">{breadcrumbText}</span>
                        
                        
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default Hero2;
