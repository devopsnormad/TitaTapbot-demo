"use client";

import { useState, useEffect } from "react";
import Card from "./Card";


const BotUI = () => {
  const [balance, setBalance] = useState(0);
  const [dailyIncome, setDailyIncome] = useState(288000);
  const [points, setPoints] = useState(0);
  const [username, setUsername] = useState("");
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [activeTab, setActiveTab] = useState("earn");

//   useEffect(() => {
//     // Replace with actual API call to fetch user data
//     fetch("https://your-backend-api.com/user-data")
//       .then((response) => response.json())
//       .then((data) => {
//         setBalance(data.balance);
//         setPoints(data.points);
//         setUsername(data.username);
//       })
//       .catch((error) => console.error("Error fetching user data:", error));
//   }, []);

//   const handleTap = () => {
//     if (points > 0) {
//       setPoints(points - 1);
//       // Update the backend with the new points value
//       fetch("https://your-backend-api.com/update-points", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ points: points - 1 }),
//       }).catch((error) => console.error("Error updating points:", error));
//     } else {
//       alert("No points left! Wait for refuel.");
//     }
//   };

useEffect(() => {
    const refillInterval = setInterval(() => {
      setPoints((prevPoints) => (prevPoints < 1000 ? prevPoints + 1 : prevPoints));
    }, 1000); // Adjust the interval as needed for refill speed

    return () => clearInterval(refillInterval);
  }, []);

  
  const handleTap = () => {
    if (points > 0) {
      setPoints(points - 1);
      setBalance(balance + 1);

      // Show the +1 effect
      setShowPlusOne(true);
      setTimeout(() => setShowPlusOne(false), 1000); // Hide after 1 second

      // Update the backend with the new points and balance values
      fetch("https://your-backend-api.com/update-points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ points: points - 1, balance: balance + 1 }),
      }).catch((error) => console.error("Error updating points:", error));
    } else {
      alert("No points left! Wait for refuel.");
    }
  };

  return (
    <div className="bot-ui p-4 max-w-md mx-auto sm:max-w-sm md:max-w-md">
      {/* Row One */}
      <div className="flex md:flex-row justify-between m-5 gap-3">
        <Card>
          <div className="flex flex-col gap-4">
            <span className="text-white">Balance</span>
            <span className="text-white">{balance}</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-4">
            <span className="text-white">Daily Income</span>
            <span className="text-white">{dailyIncome}</span>
          </div>
        </Card>
      </div>

      {/* Row Two */}
      <div className="bg-gray-800 rounded-xl m-5 text-white p-6 flex flex-col items-center gap-5">
        <button
          onClick={handleTap}
          className="mt-4 w-60 h-60 sm:w-60 sm:h-60 bg-yellow-400 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg relative"
        >
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="block w-16 h-16 sm:w-20 sm:h-20 bg-yellow-300 rounded-full"></span>
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="block w-24 h-24 sm:w-48 sm:h-48 bg-yellow-400 rounded-full border-4 border-yellow-600"></span>
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            {/* Image here */}
          </span>
          {showPlusOne && (
            <span className="absolute text-green-500 text-2xl animate-fade-out">
              +1
            </span>
          )}
        </button>
        <div className="bg-yellow-400 mt-2 p-3 w-40 sm:w-60 h-12 rounded text-center">
          <span className="text-white text-bold">{points}</span>
        </div>
      </div>

    
    </div>
  );
};

export default BotUI;
