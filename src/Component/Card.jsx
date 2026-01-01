import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500 font-medium">{title}</span>
        <div className="text-gray-400 w-6 h-6">{icon}</div>
      </div>

      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default Card;
