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
