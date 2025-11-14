import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const EmployeeTable = ({ data }) => {
  const { darkMode } = useContext(ThemeContext);

  const headers = [
    'Employee No', 'EPF No', 'Display Name', 'First Name', 'Middle Name',
    'Last Name', 'NIC', 'Mobile No 1', 'Mobile No 2', 'Address', 'Designation',
    'Basic Salary', 'Daily Salary', 'Budget Allowance', 'Incentive',
    'Special Incentive', 'Service'
  ];

  // Conditional classes
  const containerBg = darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900";
  const inputBg = darkMode ? "bg-gray-800 text-gray-100 border-gray-700" : "bg-white text-gray-900 border-gray-200";
  const tableHeaderBg = darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-700";
  const tableRowBg = darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900";
  const hoverRowBg = darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50";
  const buttonBg = darkMode ? "bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700" : "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200";

  return (
    <div className={`container mx-auto px-4 ${containerBg} p-4 rounded-md`}>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-medium text-blue-400 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
          Employees
        </h1>

        <button className={`${buttonBg} px-3 py-1 rounded-md shadow-sm`}>
          Add Employees
        </button>
      </div>

      {/* Search */}
      <div className="mb-6 w-full">
        <label className="text-lg font-semibold mb-2 block">Search</label>
        <div className="flex w-full space-x-4">
          <div className="w-1/2">
            <select className={`w-full p-2 rounded-md focus:outline-none ${inputBg}`}>
              <option value="name">Display Name</option>
              <option value="address">Display Address</option>
            </select>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              className={`w-full p-2 rounded-md focus:outline-none ${inputBg}`}
            />
          </div>
        </div>
      </div>

      <h3 className="text-xl font-medium mb-2 text-blue-500">Employee List</h3>

      {/* Table Actions */}
      <div className="flex items-center space-x-2 mb-2">
        <div className="inline-flex rounded-md overflow-hidden border">
          {['Settings', 'Refresh', 'Reset', 'Excel'].map((btn, i) => (
            <button
              key={i}
              className={`px-3 py-1 text-sm border-r last:border-r-0 ${darkMode ? "text-gray-100 hover:text-blue-400 border-gray-700" : "text-gray-600 hover:text-blue-600 border-gray-300"}`}
            >
              {btn}
            </button>
          ))}
        </div>

        <select className={`p-1 text-sm ml-auto rounded-md focus:outline-none ${inputBg}`}>
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>

      {/* Table */}
      <div className="border rounded-md overflow-x-auto shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={`${tableHeaderBg}`}>
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="px-4 py-2 text-left text-sm font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`${tableRowBg} divide-y divide-gray-200`}>
            {data && data.length > 0 ? (
              data.map((row, index) => (
                <tr key={index} className={`${hoverRowBg}`}>
                  {headers.map((header, idx) => (
                    <td key={idx} className="px-4 py-2 text-sm">
                      {row[header] || "-"}
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

      {/* Pagination */}
      <div className="flex justify-start items-center space-x-2 text-sm mt-4">
        <button className={`p-2 rounded-md ${darkMode ? "text-gray-400 border-gray-700" : "text-blue-500 border-gray-300"} bg-transparent`} disabled>
          Previous
        </button>
        <button className={`p-2 rounded-md bg-blue-600 text-white cursor-pointer`}>1</button>
        <button className={`p-2 rounded-md ${darkMode ? "text-gray-200 border-gray-700 hover:bg-gray-700" : "text-gray-600 border-gray-300 hover:bg-gray-100"}`}>2</button>
        <button className={`p-2 rounded-md ${darkMode ? "text-gray-200 border-gray-700 hover:bg-gray-700" : "text-blue-500 border-gray-300 hover:bg-gray-100"}`}>Next</button>
      </div>
    </div>
  );
};

export default EmployeeTable;
