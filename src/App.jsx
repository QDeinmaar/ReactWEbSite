import './App.css'
import { Routes , Route } from 'react-router-dom'
import Sidebar from './Component/SideBar';
import DashBoard from './Component/DashBoard'
import Expenses from './Component/Expenses'
import Stats from './Component/Stats'


function App() {
    return(
        <div className='flex App'>

            <Sidebar />
        <Routes>
            <Route path='/Dash' element= {<DashBoard />} />
            <Route path='/Exp' element= {<Expenses />} />
            <Route path='/Stat' element= {<Stats />} />
        </Routes>
            
        </div>
    );
}

export default App
