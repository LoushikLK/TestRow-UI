import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="max-w-screen relative z-10 max-h-screen overflow-hidden bg-cover bg-no-repeat pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="absolute inset-0 z-0 backdrop-blur-[3px]"></div>

        <div className="container relative">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-primary dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                  Welcome to TestRow
                </h1>
                <p className="mb-5 text-xl !leading-relaxed text-black dark:text-white sm:text-lg md:text-xl">
                  Your Trusted Partner in Software Testing Services
                </p>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  At TestRow, we understand that delivering flawless,
                  high-performing software is key to your success. With our
                  expertise in comprehensive software testing solutions, we
                  ensure your applications are secure, scalable, and bug-free,
                  giving your users the best experience possible.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/#contact"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/#about"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
