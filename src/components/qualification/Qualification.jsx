import React, { useState } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="p-4 md:p-6 max-w-screen-lg mx-auto" id="3">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        Qualification
      </h2>
      <span className="block text-base md:text-lg text-center text-gray-500 mb-6 md:mb-8">
        My Journey
      </span>

      <div className="max-w-[768px] mx-auto">
        <div className="flex justify-center mb-6 md:mb-8">
          <div
            className={`${
              toggleState === 1 ? "text-gray-800" : "text-gray-900"
            } flex items-center cursor-pointer text-base md:text-xl font-medium mx-4`}
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="text-xl md:text-2xl mr-2" />
            Education
          </div>
          <div
            className={`${
              toggleState === 2 ? "text-gray-800" : "text-gray-900"
            } flex items-center cursor-pointer text-base md:text-xl font-medium mx-4`}
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="text-xl md:text-2xl mr-2" />
            Experience
          </div>
        </div>

        <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 justify-center relative">
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gray-900  transform -translate-x-1/2"></div>

          <div
            className={`${toggleState === 1 ? "block" : "hidden"} col-span-3`}
          >
            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 mb-8">
              <div className="ml-7 lg:ml-[7rem]">
                <h3 className="text-lg md:text-xl font-medium">BSc.CSIT</h3>
                <span className="block text-sm text-gray-500 mb-1">
                  Padma Kanya Multiple Campus
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <HiOutlineCalendar className="mr-2" />
                  2020 - Present
                </div>
              </div>
              <div className="flex justify-center">
                <span className="w-3 h-3 bg-gray-900 rounded-full self-start mt-2"></span>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 mb-8">
              <div></div>
              <div className="flex justify-center">
                <span className="w-3 h-3 bg-gray-900 rounded-full self-start mt-2"></span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium">High School</h3>
                <span className="block text-sm text-gray-500 mb-1">
                  Kathmandu Model College
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <HiOutlineCalendar className="mr-2" />
                  2018 - 2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${toggleState === 2 ? "block" : "hidden"} col-span-3`}
          >
            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 mb-8">
              <div className="ml-4 lg:ml-[7rem]">
                <h3 className="text-lg md:text-xl font-medium">Inspire</h3>
                <span className="block text-sm text-gray-500 mb-1">
                  AG Member | Solution Developer
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <HiOutlineCalendar className="mr-2" />
                  Aug 2024 - Jan 2025
                </div>
              </div>
              <div className="flex justify-center">
                <span className="w-3 h-3 bg-gray-900 rounded-full self-start mt-2"></span>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 mb-8">
              <div></div>
              <div className="flex justify-center">
                <span className="w-3 h-3 bg-gray-900 rounded-full self-start mt-2"></span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium">
                  Web Development Trainee
                </h3>
                <span className="block text-sm text-gray-500 mb-1">
                  Sessami
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <HiOutlineCalendar className="mr-2" />
                  Oct 2023 - March 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
