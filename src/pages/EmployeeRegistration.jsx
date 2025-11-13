import React from 'react'
import Profile from '../components/Profile'
import DetailsCard from '../components/employee/DetailsCard'
import AdditionalDetailsCard from '../components/employee/AdditionalDetailsCard'

const EmployeeRegistration = () => {
  return (
     <div className="w-full min-h-screen bg-gray-100 p-6">
     
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 max-w-7xl mx-auto">
        
        <div className="flex flex-col">
          <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <Profile />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <DetailsCard />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <AdditionalDetailsCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeRegistration