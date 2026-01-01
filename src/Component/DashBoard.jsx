import React from "react";
import Cards from "./Cards";

const DashBoard = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome to your Expense Tracker
        </h1>
      <h1 className="text-3xl font-bold mb-8">Overview</h1>
      <Cards />
    </main>
  );
};

export default DashBoard;
