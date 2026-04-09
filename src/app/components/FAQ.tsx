"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef } from "react";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";

const faqs = [
  {
    question: "What is UAE Attestation?",
    answer:

      "UAE Attestation is the process of certifying that your document is genuine by the concerned authorities in the home country, followed by legalization from the UAE Ministry of Foreign Affairs.",
  },
  {
    question: "What is the security of my document?",
    answer:

      "Your documents are handled with the highest confidentiality. They remain safe at every step and are only processed through official government channels.",
  },
  {
    question: "How do you handle my information?",
    answer:

      "We protect your personal details with strict privacy measures. Information is never shared beyond the required authorities for attestation.",
  },
  {
    question: "Do I need to be present during the process?",
    answer:

      "No. Once you provide your documents, our team manages the entire procedure on your behalf.",
  },
  {
    question: "How will I receive my attested documents?",
    answer:

      "We offer both office collection and secure doorstep delivery across the UAE.",
  },
  



];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // open first by default

  const toggle = (idx: number) => setOpenIdx(openIdx === idx ? null : idx);

  const fadeRef = useRef<HTMLHeadingElement>(null);
  useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);

  return (
    <section className="bg-[#D5E5E3] py-14 lg:py-24 rounded-3xl">
      <div className="max-w-[1360px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }} className="heading flex flex-col text-site items-center  mx-auto mb-8 mx-auto px-6">
          <div className="flex items-center gap-2 mb-3 uppercase text-sm">
            <svg width="20" height="20" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2423 0L21.0016 5.76043L25.5559 0H22.2423ZM31.993 1.20437L24.2747 9.75047L31.993 6.66278V1.20437ZM12.2421 4.11082C12.2001 4.11146 12.1588 4.11301 12.1172 4.11488C11.5042 4.14208 10.9332 4.28471 10.4616 4.60427C9.3682 5.34497 9.73358 6.99909 8.99334 8.67088C6.4642 14.3825 3.90928 18.5248 1.65161 21.5817V28.2445C5.62076 26.8688 11.5325 25.4431 20.1718 25.1568C21.9845 25.0968 23.3769 25.9677 24.464 25.2314C27.1477 23.4134 26.176 17.338 22.319 11.6438C22.0779 11.2881 21.8533 10.9258 21.6019 10.5904C18.5854 6.56687 14.8907 4.07531 12.242 4.11095L12.2421 4.11082ZM11.8957 5.68992C11.4602 6.58537 11.8691 8.51684 12.9229 10.8945C12.5903 9.69401 12.6208 8.82286 13.0961 8.53392C14.1354 7.90215 16.9023 10.2854 19.2755 13.8574C21.6487 17.4292 22.7298 20.837 21.6906 21.4688C21.263 21.7287 20.5427 21.4777 19.6784 20.8444C21.4648 22.655 23.0772 23.7132 24.0672 23.6582C23.9522 23.8625 23.8304 24.0606 23.6483 24.184C21.9145 25.3586 17.7344 22.2343 14.3248 17.2009C10.9151 12.1675 9.56362 7.12426 11.2974 5.94973C11.4751 5.82946 11.6702 5.72247 11.8957 5.68992ZM31.993 13.1383L26.5346 14.9067L31.993 15.7346V13.1383Z" fill="var(--siteColor)" />
            </svg>

            Common Questions
          </div>
          <h2 ref={fadeRef} className="text-center fade-up-stagger text-3xl lg:text-[46px] font-medium mb-1 leading-tight">
            Need Help? Start Here...
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="w-full space-y-5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-xl overflow-hidden bg-white duration-200 border border-transparent lg:py-5 py-4`}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(idx)}
                aria-expanded={openIdx === idx}
                className={`flex items-center  cursor-pointer text-left justify-between w-full px-4 lg:px-8 font-medium  lg:text-[1.08rem] text-md  bg-white`}
              >
                {faq.question}
                <span className="text-xl inline-flex items-center justify-center bg-[#EDF6F3] p-4 rounded-full w-8 h-8">
                  {openIdx === idx ? (
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-gray-400"
                    >
                      {/* Up arrow SVG */}
                      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.325 36.176C14.241 36.176 7.70496 29.64 7.70496 21.556C7.70496 13.472 14.241 6.93604 22.325 6.93604C30.409 6.93604 36.945 13.472 36.945 21.556C36.945 29.64 30.409 36.176 22.325 36.176ZM22.325 8.65604C15.187 8.65604 9.42496 14.418 9.42496 21.556C9.42496 28.694 15.187 34.456 22.325 34.456C29.463 34.456 35.225 28.694 35.225 21.556C35.225 14.418 29.463 8.65604 22.325 8.65604Z" fill="#09424D" />
                        <path d="M14.585 20.6963H30.065V22.4163H14.585V20.6963Z" fill="#09424D" />
                      </svg>

                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ scale: 0.7 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-green-700"
                    >
                      {/* Down arrow SVG */}
                      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.325 36.3147C14.241 36.3147 7.70496 29.7787 7.70496 21.6947C7.70496 13.6107 14.241 7.07471 22.325 7.07471C30.409 7.07471 36.945 13.6107 36.945 21.6947C36.945 29.7787 30.409 36.3147 22.325 36.3147ZM22.325 8.79471C15.187 8.79471 9.42496 14.5567 9.42496 21.6947C9.42496 28.8327 15.187 34.5947 22.325 34.5947C29.463 34.5947 35.225 28.8327 35.225 21.6947C35.225 14.5567 29.463 8.79471 22.325 8.79471Z" fill="#09424D" />
                        <path d="M14.585 20.835H30.065V22.555H14.585V20.835Z" fill="#09424D" />
                        <path d="M21.465 13.9546H23.185V29.4346H21.465V13.9546Z" fill="#09424D" />
                      </svg>


                    </motion.span>
                  )}
                </span>
              </button>
              {/* Collapsible answer */}
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "tween", duration: 0.4 }}
                    className="px-5 lg:px-8  text-[#626262]  font-normal border-t border-dashed border-[#A0A0A0] mt-3"
                  >
                    <span className="pt-5 block text-sm md:text-[16px]"> {faq.answer}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          ))}
        </motion.div>
      </div>
    </section>
  );
}
