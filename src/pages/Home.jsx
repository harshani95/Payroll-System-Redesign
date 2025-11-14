import React, {useContext} from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import payroll from "../assets/payroll.webp"; 
import {Link} from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const setLight = () => setDarkMode(false);
  const setDark = () => setDarkMode(true);
  
  return (
    <>
    <div className= "bg-gray-100 text-white min-h-screen dark:bg-zinc-800">
  <div className="text-white flex justify-between items-center p-4">
    <h1 className="text-3xl text-black dark:text-white">Welcome to Payroll Management System</h1>

    <div className="flex items-center space-x-2">
      <Link
        to="/register"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Sign Up
      </Link>

      <Link
        to="/dashboard"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Dashboard
      </Link>

    <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-md border border-gray-900/10">

 
  <button onClick={setLight}
  className={`p-2 rounded transition 
                          ${!darkMode ? 'bg-white shadow-inner dark:bg-zinc-600' : 'hover:bg-gray-200 dark:hover:bg-zinc-600'}`}>
    <FiSun size={20} className="text-yellow-500" />
  </button>

 
  <button  onClick={setDark}
  className={`p-2 rounded transition 
                          ${darkMode ? 'bg-gray-700 shadow-inner dark:bg-zinc-600' : 'hover:bg-gray-200 dark:hover:bg-zinc-600'}`}>
    <FiMoon size={20} className="text-blue-500" />
  </button>

</div>


    </div>
  </div>



  
<div className="flex justify-center items-center p-6 bg-gray-50 dark:bg-zinc-800">
  <img
    src={payroll}
    alt="Payroll Cover"
    className="h-[80vh] object-cover"
  />
</div>

</div>


    </>
  );
};

export default Home;
