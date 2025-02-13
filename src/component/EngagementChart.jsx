import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EngagementChart = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Engagement Trends
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="instagram" stroke="#E1306C" />
            <Line type="monotone" dataKey="facebook" stroke="#4267B2" />
            <Line type="monotone" dataKey="twitter" stroke="#1DA1F2" />
            <Line type="monotone" dataKey="linkedin" stroke="#0077B5" />
            <Line type="monotone" dataKey="youtube" stroke="#FF0000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementChart;
