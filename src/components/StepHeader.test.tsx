import { render, screen } from "@testing-library/react";
import { type BookingStep } from "./StepHeader";
import StepHeader from "./StepHeader";

describe("StepHeader Component", () => {
  test("renders StepHeader with correct text", () => {
    const completedSteps: BookingStep[] = ["postcode", "wasteType"];
    const currentStep: BookingStep = "selectSkip";

    render(
      <StepHeader completedSteps={completedSteps} currentStep={currentStep} />
    );

    const postcodeStep = screen.getByText("Postcode");
    const wasteTypeStep = screen.getByText("Waste Type");
    const selectSkipStep = screen.getByText("Select Skip");

    expect(postcodeStep).toBeInTheDocument();
    expect(wasteTypeStep).toBeInTheDocument();
    expect(selectSkipStep).toBeInTheDocument();
  });
 
});
