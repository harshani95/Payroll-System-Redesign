import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaHome,
  FaRegClipboard,
  FaUserCog,
  FaClock,
  FaDoorOpen,
  FaMoneyCheckAlt,
  FaCog,
  FaAngleLeft,
  FaAngleDown,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

const SidebarMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const { darkMode } = useTheme();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const sidebarBg = darkMode
    ? "bg-gray-900 text-white"
    : "bg-gradient-to-b from-blue-500 to-purple-600 text-white";

  const hoverBg = darkMode ? "hover:bg-gray-800" : "hover:bg-blue-700";
  const subMenuText = darkMode
    ? "text-gray-300 hover:text-white"
    : "text-white hover:text-cyan-300";

  return (
    <div
      className={`min-h-screen w-48 p-4 m-2 rounded-xl rounded-br-2xl ${sidebarBg}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-md font-bold text-cyan-300">DART-PAYROLL</h4>

        <div className="flex items-center">
          <div className="w-0.5 h-4 bg-cyan-300"></div>
          <FaArrowLeft className=" w-4 h-4 text-cyan-300 cursor-pointer" />
        </div>
      </div>

      <ul className="space-y-1">
        <li
          className={`flex items-center justify-between p-1.5 rounded-lg cursor-pointer ${hoverBg}`}
        >
          <div className="flex items-center gap-3">
            <FaHome /> <span>Dashboard</span>
          </div>
          <FaAngleLeft />
        </li>

        <li
          className={`flex items-center justify-between p-1.5 rounded-lg cursor-pointer ${hoverBg}`}
        >
          <div className="flex items-center gap-3">
            <FaRegClipboard /> <span>Registrations</span>
          </div>
          <FaAngleLeft />
        </li>

        <li>
          <div
            className={`flex items-center justify-between p-1.5 rounded-lg cursor-pointer ${hoverBg}`}
            onClick={() => toggleMenu("employee")}
          >
            <div className="flex items-center gap-3">
              <FaUserCog /> <span>Employee Management</span>
            </div>
            {openMenu === "employee" ? <FaAngleDown /> : <FaAngleLeft />}
          </div>

          {openMenu === "employee" && (
            <ul className="ml-10 mt-1 space-y-1 text-sm">
              <li
                className={`flex items-center gap-1 cursor-pointer ${subMenuText}`}
              >
                <FaArrowRight className="w-3 h-3" /> Employee
              </li>
              <li
                className={`flex items-center gap-1 cursor-pointer ${subMenuText}`}
              >
                <FaArrowRight className="w-3 h-3" /> Salary Master
              </li>
              <li
                className={`flex items-center gap-1 cursor-pointer ${subMenuText}`}
              >
                <FaArrowRight className="w-3 h-3" /> Manage Teams
              </li>
            </ul>
          )}
        </li>

        <li
          className={`flex items-center justify-between p-1.5 rounded-lg cursor-pointer ${hoverBg}`}
        >
          <div className="flex items-center gap-3">
            <FaClock /> <span>Attendance Management</span>
          </div>
          <FaAngleLeft />
        </li>

        <li
          className={`flex items-center justify-between p-1.5 rounded-lg cursor-pointer ${hoverBg}`}
        >
          <div className="flex items-center gap-3">
            <FaDoorOpen /> <span>Leave Management</span>
          </div>
          <FaAngleLeft />
        </li>

        <li
          className={`flex items-center justify-between p-1.5 rounded-lg cursor-pointer ${hoverBg}`}
        >
          <div className="flex items-center gap-3">
            <FaMoneyCheckAlt /> <span>Salary Management</span>
          </div>
          <FaAngleLeft />
        </li>

        <li
          className={`flex items-center justify-between p-1.5 rounded-lg cursor-pointer ${hoverBg}`}
        >
          <div className="flex items-center gap-3">
            <FaCog /> <span>System Settings</span>
          </div>
          <FaAngleLeft />
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
