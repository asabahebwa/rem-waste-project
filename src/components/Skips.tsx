import NavButtons from "./NavButtons.tsx";
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
      {skips.length > 0 && <NavButtons selectedSkipId={selectedSkipId} />}
    </div>
  );
}

export default Skips;
