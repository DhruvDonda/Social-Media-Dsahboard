import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatsCard = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg">
      <div className="flex items-center justify-between">
        <div className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
          {title}
        </div>
        <div className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
          {icon}
        </div>
      </div>

      <div className="mt-4">
        <div className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
          {value}
        </div>

        <div className="flex items-center mt-2 text-sm md:text-base">
          <span
            className={`flex items-center ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? (
              <ArrowUpRight size={16} md:size={20} />
            ) : (
              <ArrowDownRight size={16} md:size={20} />
            )}
            {Math.abs(change)}%
          </span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">
            vs last month
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
