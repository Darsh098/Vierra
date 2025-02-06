import React from "react";
import CheckItem from "./CheckItem";
import StatBlock from "./StatBlock";

const StatisticsWithChecks: React.FC = () => {
  const checks = [
    "Free call USP",
    "Free call, second USP",
    "3rd Free call USP",
  ];

  return (
    <div className="px-16 py-20 h-full rounded-none bg-violet-900 bg-opacity-40 max-md:px-5 max-md:py-10 max-md:mt-10">
      <div className="text-5xl font-bold tracking-tighter leading-tight text-white">
        +10
      </div>
      <div className="mt-2 text-lg font-light tracking-normal leading-7 text-white text-opacity-80">
        Creative business insights and analysis for free.
      </div>
      <StatBlock value="+45" description="Satisfied clients served." />
      <div className="mt-14">
        {checks.map((text, index) => (
          <CheckItem key={index} text={text} />
        ))}
      </div>
    </div>
  );
};

export default StatisticsWithChecks;
