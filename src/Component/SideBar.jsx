import React from "react";
import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <nav className="bg-black h-screen w-64 flex flex-col">
            <h1 className="m-b-8 text-white">Expenses Tracker</h1>
            <div className="text-white flex flex-col items-start space-y-4">
                <Link to ='/Dash'>DashBoard</Link>
                <Link to ='/Exp'>Expenses</Link>
                <Link to ='/Stat'>Stats</Link>
            </div>
        </nav>
    );

}

export default Sidebar;