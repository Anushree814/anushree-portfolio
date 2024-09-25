"use client";
import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { myMailId } from "@/lib/constants";
import ContactFormSubmintBtn from "./ContactFormSubmintBtn";
import toast from "react-hot-toast";
export default function ContactMe() {
  const { ref } = useSectionInView("Contact");
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  return (
    <motion.section
      className="sm:mb-28 scroll-mt-28 mb-20 w-[min(100%,38rem)] text-center"
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Get in touch 📩</SectionHeading>
      <p className="text-gray-700 -mt-4 dark:text-white/80">
        Drop me a mail at{" "}
        <a className="underline" href={`mailto:${myMailId}`}>
          {myMailId}
        </a>
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const response = await sendEmail(formData);
          if (response?.error) {
            toast.error(response?.error, {
              icon: "😕",
              style: {
                padding: "1rem",
                color: "#b00510",
              },
            });
            return;
          }
          toast.success("Mail sent successfully!", {
            icon: "🚀",
            style: {
              padding: "1rem",
              color: "#05b047",
            },
          });
          if (emailRef.current) emailRef.current.value = "";
          if (messageRef.current) messageRef.current.value = "";
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          placeholder="Your email id"
          ref={emailRef}
          required
          name="senderEmail"
          maxLength={100}
        />
        <textarea
          className="h-52 my-3 rounded-lg text-gray-800 borderBlack p-4 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Type mail"
          required
          ref={messageRef}
          name="message"
          maxLength={500}
        />
        <ContactFormSubmintBtn />
      </form>
    </motion.section>
  );
}
