import React from 'react'


const EmployeeTable = ({data}) => {
 
  const headers = [
    'Employee No',
  'EPF No',
  'Display Name',
  'First Name',
  'Middle Name',
  'Last Name',
  'NIC',
  'Mobile No 1',
  'Mobile No 2',
  'Address',
  'Designation',
  'Basic Salary',
  'Daily Salary',
  'Budget Allowance',
  'Incentive',
  'Special Incentive',
  'Service'
  ];


  return (
    <div className="container mx-auto px-4 mt-4">
   
      <div className="flex justify-between items-center mb-4">
  <h1 className="text-xl font-medium text-blue-400 flex items-center gap-2">
    
     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 "
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z"/>
</svg>


    Employees
  </h1>

  <button className="text-sm bg-gray-100 border border-gray-300 px-3 py-1 rounded-md shadow-sm hover:bg-gray-200">
    Add Employees
  </button>
</div>

<div className="mb-6 w-full">

  <label className="text-lg font-semibold text-gray-500 mb-2 block">
    Search
  </label>

  
  <div className="flex w-full space-x-4">
   
    <div className="w-1/2">
      <select className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-gray-200">
        <option value="name">Display Name</option>
        <option value="address">Display Address</option>  
      </select>
    </div>

   
    <div className="w-1/2">
      <input
        type="text"
        
        className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-gray-200"
      />
    </div>
  </div>
</div>




      <h3 className="text-xl font-medium text-blue-800 mb-2">Employee List</h3>
      
     <div className="flex items-center space-x-2 mb-2">
 
  <div className="inline-flex border border-gray-300 rounded-md overflow-hidden">
    <button className="px-3 py-1 text-gray-600 hover:text-blue-600 border-r border-gray-300">
      Settings
    </button>
    <button className="px-3 py-1 text-gray-600 hover:text-blue-600 border-r border-gray-300">
      Refresh
    </button>
    <button className="px-3 py-1 text-gray-600 hover:text-blue-600 border-r border-gray-300">
      Reset
    </button>
    <button className="px-3 py-1 text-gray-600 hover:text-blue-600">
      Excel
    </button>
  </div>

 
  <select className="p-1 text-sm bg-white border border-gray-300 rounded-md focus:outline-none ml-80">
    <option>10</option>
    <option>25</option>
    <option>50</option>
  </select>
</div>


   
      <div className="border border-gray-300 rounded-md overflow-x-auto shadow-md">
        <div className="min-w-full inline-block align-middle">
          
        

           <div className="overflow-x-auto border border-gray-300 rounded-md shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-sm font-medium text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data && data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {headers.map((header, index) => (
                  <td key={index} className="px-4 py-2 text-sm text-gray-600">
                    {row[header] || '-'}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="px-4 py-2 text-center text-gray-400">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
     

        </div>
      </div>


      <div className="flex justify-start items-center space-x-2 text-sm mt-4">
        <button className="text-blue-500 disabled:text-gray-400 p-2 border border-gray-300 rounded-md" disabled>
          Previous
        </button>
        <button className="bg-blue-600 text-white p-2 rounded-md cursor-pointer">
          1
        </button>
        <button className="text-gray-600 p-2 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer">
          2
        </button>
        <button className="text-blue-500 p-2 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer">
          Next
        </button>
      </div>
      
    </div>
  );
};

export default EmployeeTable