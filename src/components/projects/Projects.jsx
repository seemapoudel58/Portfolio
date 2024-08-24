import React from "react";

const Projects = () => {
  return (
    <div className="mb-[2rem] p-5">
      <h1 className="text-3xl font-bold text-center mt-[5rem]">
        Recent Projects
      </h1>
      <span className="block text-lg text-center text-gray-500 mb-8">
        My projects
      </span>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8 mt-[4rem]">
        <div className="max-w-sm bg-gray-25 border border-gray-200 rounded-lg shadow bg-gray-50 border-gray-400 ">
          <div className="p-5">
            <a href="https://real-estate-gilt-three.vercel.app/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                Real Estate
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-900 dark:text-gray-900">
              A real estate website built using React, showcasing smooth
              animations with Framer Motion and interactive carousels with
              Swiper JS.
            </p>
            <a
              href="https://github.com/seemapoudel58/RealEstate "
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              View Code
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-gray-25 border border-gray-200 rounded-lg shadow bg-gray-50 border-gray-400 ">
          <div className="p-5">
            <a href="https://news-react-cyan-eight.vercel.app/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                NewsReact
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-900 dark:text-gray-900">
              About Hackernews UI made using hackernews' API that shows the list
              of top 500 stories. Built with React.
            </p>
            <a
              href="https://github.com/seemapoudel58/NewsReact"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              View Code
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
