import YardSkip from "./Skip.tsx";

export type Skip = {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  allowed_on_road: boolean;
};

type SkipsProps = {
  skips: Skip[];
  selectedSkip: Skip | undefined;
  handleSelectSkip: (skipId: number) => void;
  selectedSkipId: number | null;
};

function Skips({
  skips,
  selectedSkip,
  handleSelectSkip,
  selectedSkipId,
}: SkipsProps) {
  const handleBack = () => {};

  const handleContinue = () => {};

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 mt-4">Choose your skip size</h1>
      <p className="mb-4">Select the skip size that best suits your needs</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {skips.map((skip) => (
          <YardSkip
            key={skip.id}
            skip={skip}
            onSelect={() => handleSelectSkip(skip.id)}
            isSelected={selectedSkipId === skip.id}
          />
        ))}
      </div>
      {selectedSkipId ? (
        <div className="mt-8 p-4 bg-gray-800 rounded-md w-full">
          <p className="text-white-800">
            You've selected a {selectedSkip?.size} Yard Skip for a{" "}
            {selectedSkip?.hire_period_days} day hire period at £
            {selectedSkip?.price_before_vat}. Continue to the next step.
          </p>
        </div>
      ) : (
        <div className="mt-8 p-4 bg-gray-800 rounded-md w-full">
          <p className="text-gray-400">Please select a skip to continue.</p>
        </div>
      )}
      <div className="flex justify-between w-full mt-8 mb-8">
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-gray-400 rounded-md transition duration-300 font-medium cursor-pointer flex items-center"
        >
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
          onClick={handleContinue}
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
    </div>
  );
}

export default Skips;
