import { type Skip } from "./Skips";

type SkipProps = {
  skip: Skip;
  onSelect: (skipId: number) => void;
  isSelected?: boolean;
};

function YardSkip({ skip, onSelect, isSelected = false }: SkipProps) {
  return (
    <div
      data-testid="skip-card"
      className={`rounded-lg shadow-md overflow-hidden flex flex-col h-full 
        border transition-all duration-200 cursor-pointer
        ${
          isSelected
            ? "bg-[#111827] border-blue-500 ring-2 ring-blue-500 text-white"
            : "bg-[#1F2937] border-gray-700 hover:border-blue-300 text-white"
        }`}
      onClick={() => onSelect(skip.id)}
    >
      <div className="relative">
        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-48 object-cover"
        />
        {!skip.allowed_on_road && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-80 text-orange-400 px-3 py-1 rounded-md flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="text-xs font-medium">Not Allowed On The Road</span>
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center">
          <span className="text-xs font-medium">{skip.size} Yards</span>
        </div>
      </div>

      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold text-white">
          {" "}
          £{Math.floor(skip.price_before_vat)}
        </h3>

        <div className="mt-2 space-y-2">
          <p className="text-gray-400">
            <span className="font-medium">{skip.hire_period_days}</span> day
            hire period
          </p>
        </div>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <button
          className={`w-full text-white py-2 px-4 rounded-md transition duration-300 font-medium cursor-pointer
             ${
               isSelected
                 ? "bg-blue-600 hover:bg-blue-700"
                 : "bg-gray-600 hover:bg-gray-700"
             }`}
        >
          {isSelected ? "Selected" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
}

export default YardSkip;
