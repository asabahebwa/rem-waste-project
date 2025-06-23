import React from "react";

export type BookingStep =
  | "postcode"
  | "wasteType"
  | "selectSkip"
  | "permitCheck"
  | "chooseDate"
  | "payment";

type StepHeaderProps = {
  completedSteps: BookingStep[];
  currentStep: BookingStep;
};

function StepHeader({ completedSteps, currentStep }: StepHeaderProps) {
  const getStepStatus = (stepId: BookingStep) => {
    if (completedSteps.includes(stepId)) {
      return "completed";
    }
    if (stepId === currentStep) {
      return "current";
    }
    return "upcoming";
  };

  const steps = [
    {
      id: "postcode" as BookingStep,
      label: "Postcode",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: "wasteType" as BookingStep,
      label: "Waste Type",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ),
    },
    {
      id: "selectSkip" as BookingStep,
      label: "Select Skip",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      id: "permitCheck" as BookingStep,
      label: "Permit Check",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "chooseDate" as BookingStep,
      label: "Choose Date",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "payment" as BookingStep,
      label: "Payment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full mb-8 mt-8 overflow-x-auto">
      <div className="flex items-center justify-between min-w-max px-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                data-testid={`step-${step.id}`}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center mb-2
                  ${
                    getStepStatus(step.id) === "completed"
                      ? "bg-blue-500 text-white"
                      : getStepStatus(step.id) === "current"
                      ? "bg-white border-2 border-blue-500 text-blue-500"
                      : "bg-gray-200 text-gray-500"
                  }
                `}
              >
                {step.icon}
              </div>

              {/* Step label */}
              <span
                className={`
                  text-sm font-medium
                  ${
                    getStepStatus(step.id) === "completed" ||
                    getStepStatus(step.id) === "upcoming"
                      ? "text-gray-400"
                      : " text-gray-100"
                  }
                `}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line between steps */}
            {index < steps.length - 1 && (
              <div
                className={`
                  flex-grow h-0.5 mx-2
                  ${
                    completedSteps.includes(step.id)
                      ? "bg-blue-500"
                      : "bg-gray-200"
                  }
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default StepHeader;
