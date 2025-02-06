import React from "react";

interface StatBlockProps {
  value: string;
  description: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ value, description }) => (
  <div className="mt-10">
    <div className="text-5xl font-medium tracking-tighter leading-tight text-white">
      {value}
    </div>
    <div className="mt-2 text-lg font-light tracking-normal leading-7 text-white text-opacity-80">
      {description}
    </div>
  </div>
);

export default StatBlock;
