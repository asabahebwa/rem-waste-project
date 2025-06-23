import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { type Skip as SkipProps } from "./Skips";
import Skip from "./Skip";

describe("Skip Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("displays the appropriate amount with a pound symbol", async () => {
    const skip: SkipProps = {
      id: 1,
      size: 6,
      hire_period_days: 7,
      price_before_vat: 100,
      allowed_on_road: true,
    };

    const onSelectMock = jest.fn();
    render(<Skip skip={skip} onSelect={onSelectMock} />);

    const amount = await screen.findByRole("heading", {
      name: /£100/,
    });

    expect(amount).toBeInTheDocument();
  });

  test("displays the appropriate image", async () => {
    const skip: SkipProps = {
      id: 1,
      size: 6,
      hire_period_days: 7,
      price_before_vat: 100,
      allowed_on_road: true,
    };

    const onSelectMock = jest.fn();
    render(<Skip skip={skip} onSelect={onSelectMock} />);

    const image = await screen.findByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      `https://weathersasa.lon1.cdn.digitaloceanspaces.com/pixelmapstudio/images/${skip.size}-yard-skip.png`
    );
    expect(image).toHaveAttribute("alt", `${skip.size} Yard Skip`);
  });

  test("clicking on the skip should call onSelect", async () => {
    const skip: SkipProps = {
      id: 1,
      size: 6,
      hire_period_days: 7,
      price_before_vat: 100,
      allowed_on_road: true,
    };

    const onSelectMock = jest.fn();
    render(<Skip skip={skip} onSelect={onSelectMock} />);

    const skipCard = await screen.findByTestId("skip-card");
    await user.click(skipCard);
    expect(onSelectMock).toHaveBeenCalled();
    expect(onSelectMock).toHaveBeenCalledWith(skip.id);
    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(skipCard).toHaveClass("text-white");
  });

  test("displays 'Not Allowed On The Road' when skip is not allowed on the road", async () => {
    const skip: SkipProps = {
      id: 1,
      size: 6,
      hire_period_days: 7,
      price_before_vat: 100,
      allowed_on_road: false,
    };

    const onSelectMock = jest.fn();
    render(<Skip skip={skip} onSelect={onSelectMock} />);

    const notAllowedOnRoad = await screen.findByText("Not Allowed On The Road");

    expect(notAllowedOnRoad).toBeInTheDocument();
  });

  test("displays a blue border and ring when selected", async () => {
    const skip: SkipProps = {
      id: 1,
      size: 6,
      hire_period_days: 7,
      price_before_vat: 100,
      allowed_on_road: true,
    };

    const onSelectMock = jest.fn();
    render(<Skip skip={skip} onSelect={onSelectMock} isSelected={true} />);

    const skipCard = await screen.findByTestId("skip-card");

    expect(skipCard).toHaveClass("border-blue-500");
    expect(skipCard).toHaveClass("ring-2");
    expect(skipCard).toHaveClass("ring-blue-500");
  });
});
