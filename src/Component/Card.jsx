import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-[#5cb25d] hover:bg-green-700 shadow-md rounded-lg p-2 w-45 h-35">
     <div className="flex items-start"> {icon && <div className="mt-9 m-2">{icon}</div>}
     <h2 className="text-lg font-bold mt-8 mb-2">{title}</h2>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Card;
