import React, { useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import Sidebar from "./component/Sidebar";
import StatsCard from "./component/StatsCard";
import EngagementChart from "./component/EngagementChart";

const socialMediaData = {
  Instagram: {
    title: "Instagram Followers",
    value: "50.2K",
    change: 12,
    icon: <Instagram className="text-pink-500" />,
    engagement: [
      { date: "Mar 1", instagram: 4000 },
      { date: "Mar 2", instagram: 4500 },
    ],
  },
  Facebook: {
    title: "Facebook Likes",
    value: "32.4K",
    change: -2,
    icon: <Facebook className="text-blue-600" />,
    engagement: [
      { date: "Mar 1", facebook: 2400 },
      { date: "Mar 2", facebook: 2600 },
    ],
  },
  Twitter: {
    title: "Twitter Followers",
    value: "28.1K",
    change: 5,
    icon: <Twitter className="text-blue-400" />,
    engagement: [
      { date: "Mar 1", twitter: 2400 },
      { date: "Mar 2", twitter: 2800 },
    ],
  },
  Linkedin: {
    title: "LinkedIn Connections",
    value: "15.8K",
    change: 8,
    icon: <Linkedin className="text-blue-700" />,
    engagement: [
      { date: "Mar 1", linkedin: 1800 },
      { date: "Mar 2", linkedin: 2200 },
    ],
  },
  YouTube: {
    title: "YouTube Subscribers",
    value: "25.5K",
    change: 15,
    icon: <Youtube className="text-red-600" />,
    engagement: [
      { date: "Mar 1", youtube: 3200 },
      { date: "Mar 2", youtube: 3500 },
    ],
  },
};

const App = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="min-h-screen flex flex-col md:flex-row">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="md:ml-64 p-4 md:p-8 w-full">
          <div className="flex justify-between items-center mb-4 md:mb-8">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              {activeTab}
            </h1>
          </div>

          {activeTab === "Overview" ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-8">
                {Object.keys(socialMediaData).map((key) => (
                  <StatsCard
                    key={key}
                    title={socialMediaData[key].title}
                    value={socialMediaData[key].value}
                    change={socialMediaData[key].change}
                    icon={socialMediaData[key].icon}
                  />
                ))}
              </div>
              <div className="mb-4 md:mb-8">
                <EngagementChart
                  data={Object.keys(socialMediaData).flatMap(
                    (key) => socialMediaData[key].engagement
                  )}
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-8">
                <StatsCard
                  title={socialMediaData[activeTab].title}
                  value={socialMediaData[activeTab].value}
                  change={socialMediaData[activeTab].change}
                  icon={socialMediaData[activeTab].icon}
                />
              </div>
              <div className="mb-4 md:mb-8">
                <EngagementChart data={socialMediaData[activeTab].engagement} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
