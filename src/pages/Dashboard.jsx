import React  from 'react'
import SidebarMenu from '../components/SidebarMenu'
import Navbar from '../components/Navbar'
import EmployeeTable from '../components/EmployeeTable'
import Footer from '../components/Footer'
import employeeData from '../data/employeeData';


const Dashboard = () => {
  

  return (
        <div className="flex min-h-screen">
      <SidebarMenu />

      <div className="flex-1 flex flex-col">
        
        <Navbar />

      
        <div className="p-2 flex-1">
          <EmployeeTable data={employeeData}/>
        </div>

      
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard