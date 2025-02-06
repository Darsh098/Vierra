import React from "react";
import MainContent from "./MainContent";
import StatisticsWithChecks from "./StatisticsWithChecks";

const MyComponent: React.FC = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&family=Figtree:wght@300;400&family=Inter:wght@300;400&display=swap"
      rel="stylesheet"
    />
    {/* <div className="px-20 pt-20 pb-36 mx-auto my-0 w-full bg-[#7A13D0] max-w-[1312px] rounded-[60px] max-md:px-5 max-md:py-10 max-sm:px-4 max-sm:py-8"> */}
    <div className="mx-auto my-0 w-[1300px] bg-[#7A13D0]rounded-[60px] max-md:px-5 max-md:py-10 max-sm:px-4 max-sm:py-8">
      <div className="flex gap-5 max-md:flex-col bg-red-200">
        <div className="flex flex-col w-[69%] max-md:w-full bg-green-600">
          <MainContent />
        </div>
        <div className="flex flex-col w-[31%] max-md:w-full bg-green-600">
          <StatisticsWithChecks />
        </div>
      </div>
    </div>
  </>
);

export default MyComponent;
