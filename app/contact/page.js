import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "Contact Us",
  description: "Contact Us page desc",
};

export default function page() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="w-full flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Contact us for any questions or feedback
        </p>
        <div className="max-w-4xl w-full flex justify-center">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">Dev</h2>
            <div className="flex items-center justify-center">
              <Link
                href="https://www.linkedin.com/in/ahmed-selim-a80823289/"
                className="text-gray-600 flex items-center gap-2 font-bold text-2xl hover:underline hover:text-gray-900"
              >
                Ahmed Selim <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
