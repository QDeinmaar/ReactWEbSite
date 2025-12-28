import React from "react";
import { Link } from 'react-router-dom'
import { ChartPieIcon, CurrencyEuroIcon, HomeIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {

    return (

            <nav style={{backgroundColor : '#009F68'}} className="h-screen w-64 flex flex-col">
                <h1 className="m-4 mb-8 text-white">Expenses Tracker</h1>
                <div className="text-white flex flex-col items-start space-y-2 ml-4">
                    <Link to ='/Dash' className="flex hover:text-[#EFDFBB]"> <HomeIcon className="h-4 mr-2 mt-1"/> DashBoard</Link>
                    <Link to ='/Exp' className="flex hover:text-[#EFDFBB]"> <CurrencyEuroIcon className="h-4 mr-2 mt-1"/> Expenses</Link>
                    <Link to ='/Stat' className="flex hover:text-[#EFDFBB]"> <ChartPieIcon className="h-4 mr-2 mt-1" /> Stats</Link>
                </div>
            </nav>
    );

}

export default Sidebar;

