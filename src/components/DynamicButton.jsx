const DynamicButton = () => {
  return (
    <>
      <div className="flex items-center gap-3 w-full text-sm border border-gray-400">
        <div className="w-full ">
          <div className="flex items-center gap-3 w-full p-3">
            <div className="flex-1">
              <label>Dynamic Incentives</label>
            </div>

            <button
              type="button"
              className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600"
            >
              + Add Incensitive
            </button>
          </div>
          <hr className="border-gray-300 m-0" />

          <div className="flex flex-col items-center pt-4 pb-4 gap-4">
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>

            <p className="text-gray-700 dark:text-white">
              No Dynamic Incentive Added Yet
            </p>

            <button
              type="button"
              className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
            >
              + Add Your First Incentive
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicButton;
