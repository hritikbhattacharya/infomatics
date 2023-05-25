import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="fixed top-0 w-full">
        <section class="flex bg-gray-400  dark:bg-gray-900 h-screen items-center justify-center ">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 class="mb-5 drop-shadow-xl text-5xl sm:text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl dark:text-white">
              "From Data to Knowledge: Navigating the Information Age"
            </h1>
            <p class="mb-8 text-lg font-light text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Welcome to our website, your one-stop destination for news,
              documentaries, and comprehensive search facilities. Our platform
              aims to provide you with reliable and up-to-date news from various
              sources, ranging from local to international.
            </p>

            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                to="/news"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg border border-black hover:bg-gray-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-white un"
              >
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mx-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
                News
              </Link>

              <Link
                to="/info"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg border border-gray-900 hover:bg-gray-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-white hover:border-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mx-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                Ai search
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
