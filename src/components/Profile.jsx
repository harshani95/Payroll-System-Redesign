import { SiGoogledrive } from "react-icons/si";

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 border-b border-gray-200 dark:bg-zinc-800">
      <h2 className="text-2xl font-semibold text-gray-800  dark:text-white">
        New User
      </h2>
      <div className="flex items-center cursor-pointer text-sm text-indigo-600 font-medium gap-2 mt-2 border border-gray-700 p-2">
        <SiGoogledrive className="h-5 w-5 text-green-600" />
        Upload Image
      </div>
      <hr />
    </div>
  );
};

export default Profile;
