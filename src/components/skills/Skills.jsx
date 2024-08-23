import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const SkillsCard = () => {
  return (
    <div className=" mb-[5rem]" id="2">
      <h2 className="text-3xl font-semibold text-center mb-2">Skills</h2>
      <p className="block text-lg text-center text-gray-500 mb-8">Technical lvl</p>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="bg-gray-50 border border-gray-300  rounded-xl w-full max-w-[25rem] h-[20rem] flex flex-col justify-center">
          <h3 className="text-lg text-center mb-7">Frontend Development</h3>
          <div className="flex flex-wrap gap-[3rem] justify-center">
            <div className="grid gap-7">
              <div className="flex gap-2 items-start">
                <HiCheckBadge className="text-black text-lg" />
                <div>
                  <h4 className="text-base font-medium">HTML</h4>
                  <span className="text-sm">Intermediate</span>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <HiCheckBadge className="text-black text-lg" />
                <div>
                  <h4 className="text-base font-medium">CSS/Tailwind CSS</h4>
                  <span className="text-sm">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex gap-2 items-start">
                <HiCheckBadge className="text-black text-lg" />
                <div>
                  <h4 className="text-base font-medium">JavaScript</h4>
                  <span className="text-sm">Basic</span>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <HiCheckBadge className="text-black text-lg" />
                <div>
                  <h4 className="text-base font-medium">React</h4>
                  <span className="text-sm">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-300  rounded-xl w-full max-w-[25rem] h-[20rem] flex flex-col justify-center">
          <h3 className="text-lg text-center  mb-8">Backend Development</h3>
          <div className="flex flex-wrap  gap-[4rem] justify-center">
              <div className="flex gap-2 items-start">
                <HiCheckBadge className="text-black text-lg" />
                <div>
                  <h4 className="text-base font-medium">.NET</h4>
                  <span className="text-sm">Basic</span>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <HiCheckBadge className="text-black text-lg" />
                <div>
                  <h4 className="text-base font-medium">JAVA</h4>
                  <span className="text-sm">Basic</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
