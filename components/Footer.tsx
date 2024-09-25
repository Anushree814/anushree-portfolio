import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 text-gray-500 text-center px-4">
      <small className="mb-2 block text-xs">&copy; 2024 Anushree Sathe. All rights reserved</small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
