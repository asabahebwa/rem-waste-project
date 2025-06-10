import { type Skip } from "./Skips";

type SelectedSkipProps = {
  selectedSkipId: number | null;
  selectedSkip: Skip | undefined;
};

function SelectedSkip({ selectedSkip, selectedSkipId }: SelectedSkipProps) {
  return (
    <>
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
    </>
  );
}

export default SelectedSkip;
