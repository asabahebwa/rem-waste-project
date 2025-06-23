import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage.tsx";

describe("ErrorMessage Component", () => {
  test("renders error message with text", () => {
    render(<ErrorMessage text="An error occurred" />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe("An error occured");
  });
});
