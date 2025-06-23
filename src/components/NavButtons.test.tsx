import { screen, render } from "@testing-library/react";
import NavButtons from "./NavButtons";

describe("NavButtons Component", () => {
  test("renders back and continue buttons", async () => {
    render(<NavButtons selectedSkipId={2} />);

    const backButton = screen.getByRole("button", { name: /back/i });
    const continueButton = screen.getByRole("button", { name: /continue/i });

    expect(backButton).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
  });
});
