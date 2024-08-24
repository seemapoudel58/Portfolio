import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsFillFolderFill } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";

const Info = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 mt-6  p-4">
      <div className="flex flex-col justify-center items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow h-40 mx-2 mb-4">
        <HiOutlineDesktopComputer className="text-2xl text-gray-700 mb-2" />
        <h3 className="text-base font-semibold">Experience</h3>
        <span className="text-sm text-gray-500">1 Year</span>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow h-40 mx-2 mb-4">
        <BsFillFolderFill className="text-2xl text-gray-700 mb-2" />
        <h3 className="text-base font-semibold">Completed</h3>
        <span className="text-sm text-gray-500">10+ Projects</span>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow h-40 mx-2 mb-4">
        <FaSchool className="text-2xl text-gray-700 mb-2" />
        <h3 className="text-base font-semibold">Student</h3>
        <span className="text-sm text-gray-500">Final Year | BSc.CSIT</span>
      </div>
    </div>
  );
};

export default Info;
