import React, {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
   const { darkMode } = useContext(ThemeContext);
  return (


<div className="
            w-full text-center p-2 m-2 rounded-2xl shadow-md 
            text-white bg-gradient-to-r from-blue-600 to-purple-700
            dark:bg-gray-900 dark:from-gray-900 dark:to-gray-900
        ">
            <p className="text-sm text-gray-300 dark:text-gray-400">
                Copyright &copy; 2025 All Rights Reserved
            </p>
        </div>

  )
}

export default Footer