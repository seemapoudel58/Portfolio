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
    <section className="p-6 max-w-screen-lg mx-auto" id="3">
      <h2 className="text-3xl font-semibold text-center mb-2">Qualification</h2>
      <span className="block text-lg text-center text-gray-500 mb-8">
        My Journey
      </span>

      <div className="max-w-[768px] mx-auto">
        <div className="flex justify-center mb-8">
          <div
            className={`${
              toggleState === 1 ? "text-gray-800" : "text-gray-500"
            } flex items-center cursor-pointer text-xl font-medium mx-4`}
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="text-2xl mr-2" />
            Education
          </div>
          <div
            className={`${
              toggleState === 2 ? "text-gray-800" : "text-gray-500"
            } flex items-center cursor-pointer text-xl font-medium mx-4`}
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="text-2xl mr-2" />
            Experience
          </div>
        </div>

        <div className="grid grid-cols-1 justify-center relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gray-700"></div>

          <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-4 gap-y-8 mb-8 relative">
              <div className="ml-24">
                {" "}
                <h3 className="text-xl font-medium">BSc.CSIT</h3>
                <span className="block text-sm text-gray-500 mb-2">
                  Padma Kanya Multiple Campus
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <HiOutlineCalendar className="mr-2" />
                  2020 - Present
                </div>
              </div>
              <div className="relative flex justify-center items-start">
                <span className="w-3 h-3 bg-gray-700 rounded-full absolute top-1/2 transform -translate-y-1/2"></span>{" "}
              </div>
            </div>

            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-4 gap-y-8 mb-8">
              <div></div>
              <div className="relative flex justify-center items-start">
                <span className="w-3 h-3 bg-gray-700 rounded-full z-10"></span>
              </div>
              <div className="ml-7">
                <h3 className="text-xl font-medium">High School</h3>
                <span className="block text-sm text-gray-500 mb-2">
                  Kathmandu Model College
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <HiOutlineCalendar className="mr-2" />
                  2018 - 2020
                </div>
              </div>
            </div>
          </div>

          <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-4 gap-y-8 mb-8 relative">
              <div className="ml-24">
                {" "}
                <h3 className="text-xl font-medium">Inspire</h3>
                <span className="block text-sm text-gray-500 mb-2">
                  AG Member | Solution Developer
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <HiOutlineCalendar className="mr-2" />
                  Aug 2024 - Jan 2025
                </div>
              </div>
              <div className="relative flex justify-center items-start">
                <span className="w-3 h-3 bg-gray-700 rounded-full absolute top-1/2 transform -translate-y-1/2"></span>{" "}
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-4 gap-y-8 mb-8 relative">
              <div></div>
              <div className="relative flex justify-center items-start">
                <span className="w-3 h-3 bg-gray-700 rounded-full absolute top-1/2 transform -translate-y-1/2"></span>
              </div>
              <div className="ml-10">
                <h3 className="text-xl font-medium">Web Development Trainee</h3>
                <span className="block text-sm text-gray-500 mb-2">
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
