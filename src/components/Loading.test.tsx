import { screen, render } from "@testing-library/react";
import Loading from "./Loading.tsx";

describe("Loading Component", () => {
  test("renders loading message", () => {
    render(<Loading />);
    const loadingMessage = screen.getByText(/fetching skips.../i);
    expect(loadingMessage).toBeInTheDocument();
  });
});
