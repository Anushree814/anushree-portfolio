import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
export default function ContactFormSubmintBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      className="group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-sky-950 text-white rounded-full outline-none transition-all hover:scale-110 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-75 dark:bg-white dark:bg-opacity-10"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 rounded-full animate-spin border-b-2 border-white"></div>
      ) : (
        <>
          Send{" "}
          <FaPaperPlane className="text-sm transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
