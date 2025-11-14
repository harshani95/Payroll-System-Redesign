import React, {useContext} from 'react'
import Profile from '../components/Profile'
import DetailsCard from '../components/employee/DetailsCard'
import AdditionalDetailsCard from '../components/employee/AdditionalDetailsCard'
import { ThemeContext } from "../context/ThemeContext";

const EmployeeRegistration = () => {
  const { darkMode } = useContext(ThemeContext);
 
  return (
    <div className="bg-gray-900 text-white min-h-screen " >
    
     <div className="w-full min-h-screen bg-gray-100 p-6 dark:bg-zinc-700">
     
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 max-w-7xl mx-auto dark:bg-zinc-700">
        
        <div className="flex flex-col">
          <div className="bg-white shadow-md rounded-lg p-4 w-full dark:bg-zinc-700">
            <Profile />
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          <div className="bg-white shadow-md rounded-lg p-4 w-full dark:bg-zinc-700">
            <DetailsCard />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 w-full dark:bg-zinc-700">
            <AdditionalDetailsCard />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EmployeeRegistration