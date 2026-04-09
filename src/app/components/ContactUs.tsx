'use client';

import { useState } from "react";
import AnimatedButton from "./AnimatedButton";


export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Handle form submit (send POST to API route)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);

    // Get data from form fields
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      number: (form.elements.namedItem('number') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    // Send POST request to backend API
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setMessageStatus({ type: 'success', message: "Your message has been sent!" });
      form.reset();
    } else {
      setMessageStatus({ type: 'error', message: "Message sending failed." });
    }
  };

  return (
    <>
      <section className="py-14  lg:py-24   mx-auto  ">
        <div className="max-w-[1240px] px-4 lg:px-6 mx-auto grid grid-cols-1 gap-8 ">
          {/* Left: Info */}

          <div className="mb-2">

            <ul className="mt-6 lg:mt-10 grid lg:grid-cols-3 gap-4">
              <li className="flex items-center flex-col gap-4 bg-white rounded-2xl p-6 lg:p-10">
                <span className="border border-[var(--siteColor)] p-2 rounded-full  w-16 h-16 flex items-center justify-center">
                  <svg width="34" height="34" viewBox="0 0 39 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4158 45.0905C16.7288 46.1738 18.0982 47.164 19.5 48.1303C20.9049 47.1768 22.2675 46.1626 23.5842 45.0905C25.779 43.2883 27.8446 41.3342 29.7657 39.2427C34.1943 34.4002 39 27.3802 39 19.5C39 16.9392 38.4956 14.4035 37.5157 12.0377C36.5357 9.67182 35.0993 7.52216 33.2886 5.71142C31.4778 3.90067 29.3282 2.46432 26.9623 1.48435C24.5965 0.504382 22.0608 0 19.5 0C16.9392 0 14.4035 0.504382 12.0377 1.48435C9.67182 2.46432 7.52216 3.90067 5.71142 5.71142C3.90068 7.52216 2.46432 9.67182 1.48435 12.0377C0.504382 14.4035 -3.81585e-08 16.9392 0 19.5C0 27.3802 4.80567 34.398 9.23433 39.2427C11.1553 41.335 13.2209 43.2876 15.4158 45.0905ZM19.5 26.5417C17.6324 26.5417 15.8414 25.7998 14.5208 24.4792C13.2002 23.1586 12.4583 21.3676 12.4583 19.5C12.4583 17.6324 13.2002 15.8414 14.5208 14.5208C15.8414 13.2002 17.6324 12.4583 19.5 12.4583C21.3676 12.4583 23.1586 13.2002 24.4792 14.5208C25.7998 15.8414 26.5417 17.6324 26.5417 19.5C26.5417 21.3676 25.7998 23.1586 24.4792 24.4792C23.1586 25.7998 21.3676 26.5417 19.5 26.5417Z" fill="#09424D" />
                  </svg>



                </span>
                <div className="flex flex-col gap-1 text-center">
                  <span className="text-site text-lg">Our Location</span>
                  <span className="text-1 text-sm font-light">Al Saqar Business Tower, 13th Floor, Sheikh Zayed Road</span>
                </div>
              </li>

              <li className="flex items-center flex-col gap-4 bg-white rounded-2xl p-6 lg:p-10">
                <span className="border border-[var(--siteColor)] p-2 rounded-full  w-16 h-16 flex items-center justify-center">
                  <svg width="34" height="34" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.1663 14.442V32.5833C42.1664 34.0499 41.6061 35.4612 40.5999 36.5283C39.5937 37.5954 38.2178 38.2376 36.7537 38.3237L36.4163 38.3333H9.58301C8.11635 38.3333 6.7051 37.773 5.63801 36.7668C4.57091 35.7606 3.92864 34.3847 3.84259 32.9206L3.83301 32.5833V14.442L21.9359 26.5113L22.1583 26.6378C22.4203 26.7658 22.7081 26.8323 22.9997 26.8323C23.2913 26.8323 23.5791 26.7658 23.8411 26.6378L24.0634 26.5113L42.1663 14.442Z" fill="#09424D" />
                    <path d="M36.416 7.66663C38.486 7.66663 40.301 8.75913 41.313 10.4017L22.9993 22.6109L4.68555 10.4017C5.16623 9.62129 5.82652 8.96709 6.61136 8.49365C7.3962 8.02021 8.28285 7.74126 9.19738 7.68004L9.58263 7.66663H36.416Z" fill="#09424D" />
                  </svg>



                </span>
                <div className="flex flex-col gap-1 text-center">
                  <span className="text-site text-lg">Work with us</span>
                  <a href="mailto:Info@safeattestuae.com" className="text-1 text-sm font-light">Info@safeattestuae.com</a>
                </div>
              </li>
              <li className="flex items-center flex-col gap-4 bg-white rounded-2xl p-6 lg:p-10">
                <span className="border border-[var(--siteColor)] p-2 rounded-full  w-16 h-16 flex items-center justify-center">
                  <svg width="34" height="34" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8648 5.57815C20.0463 5.22193 21.3141 5.28111 22.4573 5.74584C23.6004 6.21057 24.5499 7.05281 25.1477 8.13235L25.3475 8.53465L27.1349 12.5064C27.6763 13.7121 27.8518 15.0502 27.6397 16.3548C27.4276 17.6593 26.8371 18.8729 25.9415 19.845L25.5824 20.2014L22.7663 22.8285C22.2587 23.3091 22.6394 25.1694 24.4754 28.35C26.1278 31.212 27.4724 32.5485 28.1339 32.6214H28.25L28.3931 32.5944L33.9281 30.9015C34.672 30.6733 35.4659 30.6643 36.2147 30.8754C36.9636 31.0866 37.6358 31.509 38.1509 32.0922L38.3966 32.4027L42.0605 37.4787C42.7786 38.4736 43.1364 39.6834 43.0751 40.9088C43.0137 42.1343 42.5369 43.3023 41.723 44.2206L41.3936 44.5608L39.9302 45.9486C38.6161 47.193 36.9723 48.034 35.1942 48.3714C33.416 48.7089 31.5784 48.5286 29.8997 47.8521C24.6752 45.7461 19.9286 40.9347 15.6167 33.4665C11.2967 25.9794 9.50124 19.4535 10.3031 13.8645C10.5458 12.175 11.2415 10.5828 12.3164 9.25689C13.3912 7.93103 14.8051 6.92103 16.4078 6.33415L16.9289 6.16135L18.8648 5.57815Z" fill="#09424D" />
                  </svg>

                </span>
                <div className="flex flex-col gap-1 text-center">
                  <span className="text-site text-lg">Call Us 24/7</span>
                  <span className="text-1 text-sm font-light">+971 50 954 8130</span>
                </div>
              </li>

            </ul>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white lg:p-12 p-6 space-y-8"
          >
            <h4 className="text-2xl lg:text-3xl font-semibold max-w-xl">Feel Free to Get in Touch or Visit our
              Location.</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <input
                name="name"
                className="w-full bg-white border-b-[#00000063] border-b py-3 focus:outline-none placeholder-[#BFBCBC]"
                type="text"
                placeholder={"Full Name"}
                required
              />
              <div>

                <input
                  name="email"
                  className="w-full bg-white border-b-[#00000063] border-b py-3 focus:outline-none placeholder-[#BFBCBC]"
                  type="email"
                  placeholder={"Email"}
                  required
                />
              </div>

              <input
                name="number"
                className="w-full bg-white border-b-[#00000063] border-b py-3 focus:outline-none placeholder-[#BFBCBC]"
                type="text"
                placeholder={"Phone number"}
                required
              />
            </div>

            <div>

              <textarea
                name="message"
                className="w-full bg-white border-b-[#00000063] border-b min-h-[140px] py-3 focus:outline-none resize-none placeholder-[#BFBCBC]"
                rows={3}
                placeholder={"Type Your Message"}
                required
              />
            </div>
            <div className="mt-10 justify-self-end">

              <AnimatedButton type="submit"
                label="Send message" className="w-fit text-white lg:mt-2" />
            </div>
            <div className="mt-3 justify-self-end message-status">
              {messageStatus && (
                <p className={`${messageStatus.type === 'success' ? 'text-blue-500' : 'text-red-500'}`}>
                  {messageStatus.message}
                </p>
              )}
            </div>
          </form>
        </div>


      </section>

    </>
  );
}
