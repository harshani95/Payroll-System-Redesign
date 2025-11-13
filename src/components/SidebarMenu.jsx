import React, {useState} from 'react'
import {
  FaHome,
  FaRegClipboard,
  FaUserCog,
  FaUsers,
  FaMoneyCheckAlt,
  FaClock,
  FaDoorOpen,
  FaCog,
  FaAngleLeft, FaAngleDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";


const SidebarMenu = () => {
     const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  }
  return (
   
    <>
       <div className="h-screen w-48 bg-gradient-to-b from-blue-500 to-purple-600 text-white p-4 m-2 rounded-xl rounded-br-2xl">
   
      <div className="flex items-center justify-between mb-4">
  <h4 className="text-md font-bold text-cyan-300">DART-PAYROLL</h4>

  <div className="flex items-center">

    <div className="w-[2px] h-4 bg-cyan-300"></div>

   
    <FaArrowLeft className="w-4 h-4 text-cyan-300" />
  </div>
</div>


  
      <ul className="space-y-1">
        <li className="flex items-center justify-between p-1.5 hover:bg-blue-700 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <FaHome /> <span>Dashboard</span>
          </div>
            <FaAngleLeft />
        </li>

        <li className="flex items-center justify-between p-1.5 hover:bg-blue-700 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <FaRegClipboard /> <span>Registrations</span>
          </div>
            <FaAngleLeft />
        </li>

        
        <li>
          <div
            className="flex items-center justify-between p-1.5 hover:bg-blue-700 rounded-lg cursor-pointer"
            onClick={() => toggleMenu("employee")}
          >
            <div className="flex items-center gap-3">
              <FaUserCog /> <span>Employee Management</span>
            </div>
            {openMenu === "employee" ? <FaAngleDown /> : <FaAngleLeft />}
          </div>

          {openMenu === "employee" && (
            <ul className="ml-10 mt-1 space-y-1 text-sm">
  <li className="flex items-center gap-1 text-white hover:text-cyan-300 cursor-pointer">
    <FaArrowRight className="w-3 h-3 text-white" /> Employee
  </li>
  <li className="flex items-center gap-1 text-white hover:text-cyan-300 cursor-pointer">
    <FaArrowRight className="w-3 h-3 text-white" /> Salary Master
  </li>
  <li className="flex items-center gap-1 text-white hover:text-cyan-300 cursor-pointer">
    <FaArrowRight className="w-3 h-3 text-white" /> Manage Teams
  </li>
</ul>
          )}
        </li>

      
        <li className="flex items-center justify-between p-1.5 hover:bg-blue-700 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <FaClock /> <span>Attendance Management</span>
          </div>
          <FaAngleLeft />
        </li>


        <li className="flex items-center justify-between p-1.5 hover:bg-blue-700 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <FaDoorOpen /> <span>Leave Management</span>
          </div>
          <FaAngleLeft />
        </li>

        <li className="flex items-center justify-between p-1.5 hover:bg-blue-700 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <FaMoneyCheckAlt /> <span>Salary Management</span>
          </div>
          <FaAngleLeft />
        </li>

        <li className="flex items-center justify-between p-1.5 hover:bg-blue-700 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <FaCog /> <span>System Settings</span>
          </div>
          <FaAngleLeft />
        </li>
      </ul>
    </div>
       

      </>  
      
  )
}

export default SidebarMenu