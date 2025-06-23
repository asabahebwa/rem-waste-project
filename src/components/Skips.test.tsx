import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Skips from "./Skips";

const renderComponent = () => {
  const skips = [
    {
      id: 1,
      size: 2,
      hire_period_days: 7,
      price_before_vat: 100,
      allowed_on_road: true,
    },
    {
      id: 2,
      size: 4,
      hire_period_days: 14,
      price_before_vat: 150,
      allowed_on_road: false,
    },
  ];

  const mockHandleSelectSkip = jest.fn();

  render(
    <Skips
      skips={skips}
      selectedSkip={undefined}
      handleSelectSkip={mockHandleSelectSkip}
      selectedSkipId={null}
    />
  );
  return {
    mockHandleSelectSkip,
  };
};

describe("Skips Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("renders the correct number of skips", async () => {
    renderComponent();

    const headings = await screen.findAllByRole("heading");
    expect(headings.length).toBe(3);
  });

  test("renders the correct skips heading", async () => {
    renderComponent();

    const skipsHeading = await screen.findByRole("heading", {
      name: /choose your skip size/i,
    });
    expect(skipsHeading).toBeInTheDocument();
    expect(skipsHeading.textContent).toBe("Choose your skip size");
  });

  test("allows selecting a skip", async () => {
    const { mockHandleSelectSkip } = renderComponent();

    const skipCards = await screen.findAllByTestId("skip-card");
    await user.click(skipCards[0]);

    expect(mockHandleSelectSkip).toHaveBeenCalledTimes(1);
    expect(mockHandleSelectSkip).toHaveBeenCalledWith(1);
  });
});
