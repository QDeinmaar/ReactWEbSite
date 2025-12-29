/* import React from "react";
import Cards from "./Cards";

const DashBoard = () => {
  return (
    <main style={{ backgroundColor: "#ffffffff" }} className="w-full min-h-screen text-center py-6">
      <h1 className="text-black text-3xl font-bold mb-6">Overview</h1>

      <div className="flex justify-center w-full">
        <Cards />
      </div>
    </main>
  );
};

export default DashBoard;
*/
import React from "react";
import Cards from "./Cards";

const DashBoard = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Overview</h1>
      <Cards />
    </main>
  );
};

export default DashBoard;
