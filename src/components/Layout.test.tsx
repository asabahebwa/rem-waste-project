import { render, screen } from "@testing-library/react";
import { type BookingStep } from "./StepHeader";
import Layout from "./Layout";

describe("Layout Component", () => {
  test("renders the header", () => {
    const completedSteps: BookingStep[] = ["postcode", "wasteType"];
    const currentStep: BookingStep = "selectSkip";

    render(
      <Layout completedSteps={completedSteps} currentStep={currentStep}>
        <div>Test Content</div>
      </Layout>
    );

    // Check if the header is rendered
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  test("renders the main content", () => {
    const completedSteps: BookingStep[] = ["postcode", "wasteType"];
    const currentStep: BookingStep = "selectSkip";

    render(
      <Layout completedSteps={completedSteps} currentStep={currentStep}>
        <div>Test Content</div>
      </Layout>
    );

    // Check if the main content is rendered
    const mainContent = screen.getByText("Test Content");
    expect(mainContent).toBeInTheDocument();
  });
});
