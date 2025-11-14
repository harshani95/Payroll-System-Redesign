import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode } = useTheme();

  const currentDate = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = currentDate
    .toLocaleDateString("en-GB", options)
    .toUpperCase();

  const navBg = darkMode
    ? "bg-gray-900 text-white"
    : "bg-gradient-to-r from-blue-600 to-purple-700 text-white";
  const iconColor = darkMode ? "text-gray-200" : "text-white";

  return (
    <nav className={`p-2 m-2 rounded-2xl shadow-md ${navBg}`}>
      <div className="container mx-auto flex justify-between items-center h-10">
        <div
          className={`text-sm font-medium ${
            darkMode ? "text-gray-200" : "text-white"
          }`}
        >
          {formattedDate}
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <button className="relative p-1 rounded-full cursor-pointer">
              <svg
                className={`h-6 w-6 ${iconColor}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>

            <button className="relative p-1 rounded-full cursor-pointer">
              <svg
                className={`h-6 w-6 ${iconColor}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            <button className="relative p-1 rounded-full cursor-pointer">
              <svg
                className={`h-6 w-6 ${iconColor}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.8L3 20l1.8-4A9.863 9.863 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
          </div>

          <div className="flex items-center space-x-2 relative group cursor-pointer">
            <div className="relative w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-800 border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>

            <div className="flex flex-col text-right">
              <span
                className={`text-xs font-semibold ${
                  darkMode ? "text-gray-200" : "text-white"
                }`}
              >
                0771154848
              </span>
              <span
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-200"
                }`}
              >
                SUPER_ADMIN
              </span>
            </div>

            <svg
              className={`h-4 w-4 ${iconColor}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
