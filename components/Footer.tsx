"use client";

import React, { useState } from "react";
import { FaDollarSign, FaLink, FaChartLine, FaGift } from "react-icons/fa";

const Footer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("earn");

  return (
    <footer className="max-w-full sm:max-w-md mx-auto bg-gray-800 text-white">
      <div className="p-3 max-w-full sm:max-w-md mx-auto flex items-center justify-around">
        <button
          className={`flex flex-col items-center space-y-1 ${
            activeTab === "earn" ? "text-purple-500" : "text-white"
          }`}
          onClick={() => setActiveTab("earn")}
        >
          <FaDollarSign className="text-lg" />
          <span>Earn</span>
          {activeTab === "earn" && (
            <div className="h-1 w-full bg-purple-500 mt-1"></div>
          )}
        </button>
        <button
          className={`flex flex-col items-center space-y-1 ${
            activeTab === "invite" ? "text-purple-500" : "text-white"
          }`}
          onClick={() => setActiveTab("invite")}
        >
          <FaLink className="text-lg" />
          <span>Invite</span>
          {activeTab === "invite" && (
            <div className="h-1 w-full bg-purple-500 mt-1"></div>
          )}
        </button>
        <button
          className={`flex flex-col items-center space-y-1 ${
            activeTab === "top" ? "text-purple-500" : "text-white"
          }`}
          onClick={() => setActiveTab("top")}
        >
          <FaChartLine className="text-lg" />
          <span>Top</span>
          {activeTab === "top" && (
            <div className="h-1 w-full bg-purple-500 mt-1"></div>
          )}
        </button>
        <button
          className={`flex flex-col items-center space-y-1 ${
            activeTab === "rewards" ? "text-purple-500" : "text-white"
          }`}
          onClick={() => setActiveTab("rewards")}
        >
          <FaGift className="text-lg" />
          <span>Rewards</span>
          {activeTab === "rewards" && (
            <div className="h-1 w-full bg-purple-500 mt-1"></div>
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
