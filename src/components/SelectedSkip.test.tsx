import { screen, render } from "@testing-library/react";
import SelectedSkip from "./SelectedSkip";
import { type Skip } from "./Skips";

describe("SelectedSkip Component", () => {
  test("renders SelectedSkip component with correct text when a skip is selected", () => {
    const selectedSkip: Skip = {
      id: 45,
      size: 12,
      hire_period_days: 14,
      price_before_vat: 200,
      allowed_on_road: false,
    };
    render(<SelectedSkip selectedSkip={selectedSkip} selectedSkipId={45} />);

    const paragraphElement = screen.getByText(
      "You've selected a 12 Yard Skip for a 14 day hire period at £200. Continue to the next step."
    );
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.textContent).toBe(
      "You've selected a 12 Yard Skip for a 14 day hire period at £200. Continue to the next step."
    );
  });

  test("renders SelectedSkip component with default text when no skip is selected", () => {
    render(<SelectedSkip selectedSkip={undefined} selectedSkipId={null} />);

    const paragraphElement = screen.getByText(
      "Please select a skip to continue."
    );
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.textContent).toBe(
      "Please select a skip to continue."
    );
  });
});
