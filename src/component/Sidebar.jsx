import React, { useState } from "react";
import {
  LayoutDashboard,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Menu,
} from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out z-40 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <div className="p-4 flex justify-between items-center md:block">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Social Media Dashboard
          </h1>
          <button
            className="md:hidden text-gray-500 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
          </button>
        </div>

        <nav className="mt-8">
          <NavItem
            icon={<LayoutDashboard />}
            text="Overview"
            active={activeTab === "Overview"}
            onClick={() => setActiveTab("Overview")}
          />
          <NavItem
            icon={<Instagram />}
            text="Instagram"
            active={activeTab === "Instagram"}
            onClick={() => setActiveTab("Instagram")}
          />
          <NavItem
            icon={<Facebook />}
            text="Facebook"
            active={activeTab === "Facebook"}
            onClick={() => setActiveTab("Facebook")}
          />
          <NavItem
            icon={<Twitter />}
            text="Twitter"
            active={activeTab === "Twitter"}
            onClick={() => setActiveTab("Twitter")}
          />
          <NavItem
            icon={<Linkedin />}
            text="LinkedIn"
            active={activeTab === "Linkedin"}
            onClick={() => setActiveTab("Linkedin")}
          />
          <NavItem
            icon={<Youtube />}
            text="YouTube"
            active={activeTab === "YouTube"}
            onClick={() => setActiveTab("YouTube")}
          />
        </nav>
      </div>
    </>
  );
};

const NavItem = ({ icon, text, active, onClick }) => {
  return (
    <div
      className={`flex items-center px-6 py-3 cursor-pointer ${
        active
          ? "bg-blue-50 dark:bg-gray-700 border-r-4 border-blue-500"
          : "hover:bg-gray-50 dark:hover:bg-gray-700"
      }`}
      onClick={onClick}
    >
      <span
        className={`mr-3 ${
          active ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
        }`}
      >
        {icon}
      </span>
      <span
        className={`${
          active
            ? "text-blue-500 font-medium"
            : "text-gray-600 dark:text-gray-300"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default Sidebar;
