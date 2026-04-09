'use client';

import { useState } from "react";
import AnimatedButton from "./AnimatedButton";


export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Handle form submit (send POST to API route)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);

    // Get data from form fields
    const form = e.target as HTMLFormElement;
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
    const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value;
    const formData = {
      name: `${firstName} ${lastName}`,
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
      <div className="p-6 lg:p-8  bg-[var(--siteColor)] rounded-3xl">
        <div className="mb-6">
          <h4 className="text-2xl text-white">Get a Quote</h4>
          <p className="text-2 text-sm mt-1">Our Advisor will contact you shortly</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="firstName"
              className="w-full bg-[#036072] rounded-2xl px-6 py-3 focus:outline-none placeholder-[#BFBCBC] text-white"
              type="text"
              placeholder={"First Name"}
              required
            />
            <input
              name="lastName"
              className="w-full bg-[#036072] rounded-2xl px-6 py-3 focus:outline-none placeholder-[#BFBCBC] text-white"
              type="text"
              placeholder={"Last Name"}
              required
            />

            
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="number"
              className="w-full bg-[#036072] rounded-2xl px-6 py-3 focus:outline-none placeholder-[#BFBCBC] text-white"
              type="text"
              placeholder={"Mobile"}
              required
            />

            <input
              name="email"
              className="w-full bg-[#036072] rounded-2xl px-6 py-3 focus:outline-none placeholder-[#BFBCBC] text-white"
              type="email"
              placeholder={"Email"}
              required
            />
          </div>
          <div>

            <textarea
              name="message"
              className="w-full bg-[#036072] text-white rounded-2xl px-6 min-h-[120px] py-3 focus:outline-none text-white resize-none placeholder-[#BFBCBC]"
              rows={3}
              placeholder={"Message"}
              required
            />
          </div>
          <div>

            <AnimatedButton type="submit"
              label="Get a Quote" className="w-full transparent-btn no-icon" />
          </div>
          <div className="justify-self-end message-status absolute bottom-[15px] right-[35px]">
            {messageStatus && (
              <p className={`${messageStatus.type === 'success' ? 'text-green-500  text-xs font-normal' : 'text-red-500 text-xs font-normal'}`}>
                {messageStatus.message}
              </p>
            )}
          
          </div>
        </form>
      </div>

    </>
  );
}
