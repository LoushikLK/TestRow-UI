import { SVGProps } from "react";
import SectionTitle from "../Common/SectionTitle";

const services: {
  title: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}[] = [
  {
    title: "Functional Testing",
    description:
      "Ensure your software meets all functional requirements, delivering a seamless user experience.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Automation Testing",
    description:
      "Accelerate your testing process with robust automation frameworks tailored to your technology stack.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Mobile Application Testing",
    description:
      "Test your mobile apps for functionality, performance, and compatibility across devices and platforms.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Performance Testing",
    description:
      "Assess and optimize the speed, stability, and scalability of your applications under real-world conditions.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "API Testing",
    description:
      "Verify and validate your APIs with precision, ensuring reliable backend integration and data flow.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Security Testing",
    description:
      "Protect your applications against vulnerabilities and ensure compliance with industry standards.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Regression Testing",
    description:
      "Ensure updates and new features don't disrupt existing functionalities.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Usability Testing",
    description:
      "Enhance user satisfaction by optimizing your application's design and functionality.",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function OurServiceSection() {
  return (
    <div
      id="services"
      className="relative z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-16 dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-900 dark:to-black sm:px-6 md:py-20 lg:px-8 lg:py-28"
    >
      <div className="container mx-auto">
        <SectionTitle
          title="Our Services"
          paragraph="Comprehensive testing solutions to ensure your software's quality and reliability."
          center
          mb="80px"
        />

        <div className="mt-24">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="shadow-secondary/10 group relative rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-dark dark:shadow-none"
              >
                <div className="absolute right-6 top-6">
                  <span className="inline-flex items-center justify-center rounded-full bg-blue-100 p-3 shadow-lg transition-colors duration-300 group-hover:bg-blue-200">
                    <service.icon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div>
                  <h3 className="group-hover:text-secondary mt-8 text-xl font-semibold text-gray-900 transition-colors duration-300 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
