/* import React from "react";

const Card = ({ title, value, icon }) => {

  const getNumValue = () => {

    const numberValue = value.replace('€', '').replace(',', '');
    return parseFloat(numberValue) || 0;
  };

  const numberValue = getNumValue();

  const BackGroundColor = () => {
    if(numberValue < 0) {
      return 'bg-red-500 hover:bg-red-600'
    } else if(numberValue > 0) {
      return 'bg-green-500 hover:bg-green-600'
    } else { return 'bg-gray-500 hover:bg-gray-600' }
  }

  const TextColor = () => {

    if(numberValue < 0) {
      return 'text-red-700'
    } else if (numberValue < 0) {
      return 'text-green-700'
    } else { return 'text-gray-700'}
  }

  const BorderColor = () => {
    if(numberValue > 0 ) {
      return 'border-red-300'
    } else if (numberValue < 0) {
      return 'border-green-300'
    } else { return 'border-gray-300'}
  }

  return (
    <div className={`${BackGroundColor()} ${BorderColor()} }shadow-md rounded-lg p-2 w-45 h-35 transition-colors duration-300`}>
     <div className="flex items-start"> {icon && <div className="mt-9 m-2">{icon}</div>}
     <h2 className="text-lg font-bold mt-8 mb-2">{title}</h2>
      </div>
      <p className={`text-2xl font-bold ${TextColor()}`}>{value}</p>
    </div>
  );
};

export default Card;
*/ 

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
