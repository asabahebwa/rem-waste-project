type NavButtonsProps = {
  selectedSkipId: number | null;
};

function NavButtons({ selectedSkipId }: NavButtonsProps) {
  return (
    <div className="flex justify-between w-full mt-8 mb-8">
      <button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-gray-400 rounded-md transition duration-300 font-medium cursor-pointer flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>

      <button
        disabled={!selectedSkipId}
        className={`px-6 py-2 rounded-md transition duration-300 font-medium flex items-center ${
          selectedSkipId
            ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continue
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default NavButtons;
