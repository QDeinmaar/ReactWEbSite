import './App.css'
import { Routes , Route, Navigate } from 'react-router-dom'
import Sidebar from './Component/SideBar';
import DashBoard from './Component/DashBoard'
import Expenses from './Component/Expenses'
import Stats from './Component/Stats'


function App() {
    return(
        <div className='flex min-h-screen bg-gray-100'>

            <Sidebar />
            
        <Routes>

            <Route path="/" element={<Navigate to="/Dash" />} />
            <Route path='/Dash' element= {<DashBoard />} />
            <Route path='/Exp' element= {<Expenses />} />
            <Route path='/Stat' element= {<Stats />} />
            
        </Routes>
        </div>
    );
}

export default App
