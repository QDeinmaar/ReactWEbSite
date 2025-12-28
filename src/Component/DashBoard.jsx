/*import React , {useState} from "react";
import Cards from "./Cards";
import Card from "./Card";

const DashBoard = () => {

    return(
       <main style={{backgroundColor : '#00A877'}} className="w-full text-center">
            <h1 className="text-white text-3xl font-bold mt-4">Overview</h1>

            <div className="mt-6 flex justify-center w-full min-h-45">
                <Cards />
            </div>
       </main>
    );

}


export default DashBoard */

import React from "react";
import Cards from "./Cards";

const DashBoard = () => {
  return (
    <main style={{ backgroundColor: "#00A877" }} className="w-full min-h-screen text-center py-6">
      <h1 className="text-white text-3xl font-bold mb-6">Overview</h1>

      <div className="flex justify-center w-full">
        <Cards />
      </div>
    </main>
  );
};

export default DashBoard;
