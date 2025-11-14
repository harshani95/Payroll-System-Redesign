import React ,{useContext} from 'react'
import SidebarMenu from '../components/SidebarMenu'
import Navbar from '../components/Navbar'
import EmployeeTable from '../components/EmployeeTable'
import Footer from '../components/Footer'
import employeeData from '../data/employeeData';
import { ThemeContext } from "../context/ThemeContext";


const Dashboard = () => {
   const { darkMode } = useContext(ThemeContext);
 
  return (
    <>
    
    <div className="flex min-h-screen bg-gray-100 text-black dark:bg-gray-800">

  <SidebarMenu />


  <div className="flex-1 flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
    <Navbar />

   
    <div className="flex-1 p-2 bg-gray-100 dark:bg-gray-900">
      <EmployeeTable data={employeeData}/>
    </div>

    <Footer />
  </div>
</div>

    </>
       
  )
}

export default Dashboard