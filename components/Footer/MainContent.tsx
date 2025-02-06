import React from "react";

const MainContent: React.FC = () => (
  <div className="flex flex-col items-start mt-20 w-full max-md:mt-10">
    <div className="self-stretch text-6xl font-semibold tracking-wide text-white leading-[68px] max-md:text-4xl max-md:leading-[54px] max-sm:text-3xl max-sm:leading-10">
      We invite you to try our innovative solutions tools.
    </div>
    <div className="mt-6 text-3xl font-light tracking-wide leading-none text-white opacity-80 max-md:text-3xl max-sm:text-2xl">
      Schedule an appointment with us and find out.
    </div>
    <div className="flex gap-5 mt-36 max-md:mt-10 max-sm:flex-col">
      <button className="px-8 py-6 text-sm font-light tracking-wide text-purple-700 bg-white border-2 border-white border-solid cursor-pointer rounded-[70px] max-sm:w-full max-sm:text-center">
        Book a meeting
      </button>
      <button className="px-8 py-6 text-sm font-light tracking-wide text-white border-2 border-white border-solid cursor-pointer rounded-[70px] max-sm:w-full max-sm:text-center">
        Get in touch
      </button>
    </div>
  </div>
);

export default MainContent;
