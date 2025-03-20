import React from "react";

function page() {
  return (
    <div className=" mt-4 mb-18 md:mb-58 bg-gray-100 rounded-2xl py-4 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-red-500 mb-4 md:mb-8">
          Contact Info
        </h1>
        <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed">
          I am currently open to work and available for hire as a{" "}
          <span className="font-semibold text-blue-600">
            React/Next Full-Stack Developer
          </span>
          . Whether you're looking for a{" "}
          <span className="font-semibold text-green-600">freelancer</span>,{" "}
          <span className="font-semibold text-purple-600">part-time</span>, or{" "}
          <span className="font-semibold text-indigo-600">full-time</span> role
          (remote), I'd love to collaborate and bring your ideas to life! 🚀
        </p>

        <div className="bg-white shadow-md rounded-lg px-8 py-3 md:py-6">
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="text-gray-700 text-sm md:text-lg">
                Email:{" "}
                <a
                  href="mailto:sreenu926@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  sreenu926@gmail.com
                </a>
              </p>
            </div>

            {/* Mobile Number */}
            <div className="flex items-center justify-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <p className="text-gray-700 text-sm md:text-lg">
                Mobile:{" "}
                <a
                  href="tel:9927059710"
                  className="text-blue-500 hover:underline"
                >
                  +91 9927059710
                </a>
              </p>
            </div>

            {/* Address (Optional) */}
            <div className="flex items-center justify-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 md:h-6 md:w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-gray-700 text-sm md:text-lg">
                Address: Jolly Grant, Dehradun, Uttarakhand, India, Pin Code:
                248140.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
