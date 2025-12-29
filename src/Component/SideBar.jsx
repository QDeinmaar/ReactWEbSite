/* import React from "react";
import { Link } from 'react-router-dom'
import { ChartPieIcon, CurrencyEuroIcon, HomeIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {

    return (

            <nav style={{backgroundColor : '#406ABF'}} className="h-screen w-64 flex flex-col relative shadow-md">
                <h1 className="m-4 mb-8 text-white text-2xl">Expenses Tracker</h1>
                <div className="text-white flex flex-col items-start space-y-2 ml-4">
                    <Link to ='/Dash' className="flex hover:text-[#EFDFBB]"> <HomeIcon className="h-4 mr-2 mt-1"/> DashBoard</Link>
                    <Link to ='/Exp' className="flex hover:text-[#EFDFBB]"> <CurrencyEuroIcon className="h-4 mr-2 mt-1"/> Expenses</Link>
                    <Link to ='/Stat' className="flex hover:text-[#EFDFBB]"> <ChartPieIcon className="h-4 mr-2 mt-1" /> Stats</Link>
                </div>
            </nav>
    );

}

export default Sidebar;
*/
import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  CurrencyEuroIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside className="bg-blue-700 text-white w-64 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">Expense Tracker</h1>

      <nav className="flex flex-col gap-2">
        <Link
          to="/Dash"
          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-600"
        >
          <HomeIcon className="w-5 h-5" />
          Dashboard
        </Link>

        <Link
          to="/Exp"
          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-600"
        >
          <CurrencyEuroIcon className="w-5 h-5" />
          Expenses
        </Link>

        <Link
          to="/Stat"
          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-600"
        >
          <ChartPieIcon className="w-5 h-5" />
          Stats
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
