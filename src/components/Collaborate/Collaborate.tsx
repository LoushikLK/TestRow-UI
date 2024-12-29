"use client";

import Link from "next/link";
import { useState } from "react";

export default function CollaborateSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Why Quality Matters
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            In today{"'"}s competitive market, software quality can make or
            break your reputation. At TestRow, we are committed to ensuring your
            product stands out by delivering exceptional performance and
            reliability.
          </p>
        </div>

        <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Our Commitment to Excellence
            </h2>
            <ul className="space-y-4">
              {[
                "Rigorous testing methodologies",
                "Cutting-edge tools and technologies",
                "Experienced quality assurance professionals",
                "Continuous improvement and learning",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Impact by the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    stat: "99.9%",
                    desc: "Uptime achieved for client applications",
                  },
                  { stat: "50%", desc: "Average reduction in bug reports" },
                  {
                    stat: "2x",
                    desc: "Faster time-to-market for new features",
                  },
                  { stat: "100+", desc: "Successful projects delivered" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-indigo-600">
                      {item.stat}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-indigo-50 p-4">
              <p className="text-center text-sm text-indigo-600">
                *Based on average results from our top 50 clients in 2023
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Let{"'"}s Collaborate
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Are you ready to elevate your software quality and build trust
                with your users? Partner with TestRow for reliable, efficient,
                and innovative software testing services.
              </p>
            </div>
            <div className="mt-8 lg:ml-8 lg:mt-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/#contact"
                  className="inline-flex transform items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Get Started
                  <svg
                    className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-300 ease-in-out ${isHovered ? "translate-x-1" : ""}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
