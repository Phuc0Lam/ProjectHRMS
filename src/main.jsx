import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes  } from 'react-router'
import AllEmployee from './components/AllEmployee.jsx'
import AllDepartment from './components/AllDepartment.jsx'
import Attendance from './components/Attendance.jsx'
import Payroll from './components/Payroll.jsx'
import EmployeeDetails from './components/EmployeeDetails.jsx'
import EditEmployee from './components/EditEmployee.jsx'
import AddEmployee from './components/AddEmployee.jsx'
import Jobs from './components/Jobs.jsx'
import Candidates from './components/Candidates.jsx'
import Setting from './components/Setting.jsx'
import Leaves from './components/Leaves.jsx'
import Holidays from './components/Holidays.jsx'
createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
        
        <Route path='/AllEmployee' >
          <Route index element={<AllEmployee/>}/>
          <Route path='AddEmployee' element={<AddEmployee/>}/>
          <Route path='Details/:employeeId' element={<EmployeeDetails/>}/>
          <Route path='EditEmployee/:employeeId'element={<EditEmployee/>} />
        </Route>
        <Route path='/AllDepartment' element={<AllDepartment/>}/>
        <Route path='/Attendance' element={<Attendance/>}/>
        <Route path='/Payroll' element={<Payroll/>}/>
        <Route path='/Jobs' element={<Jobs/>}/>
        <Route path='/Candidates' element={<Candidates/>}/>
        <Route path='/Leaves' element={<Leaves/>}/>
         <Route path='/Holidays' element={<Holidays/>}/>
        <Route path='/Setting' element={<Setting/>}/>
      

      </Routes>
    </BrowserRouter>
)
