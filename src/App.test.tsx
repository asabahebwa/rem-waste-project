import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { get } from "./util/http";

// Mock the http module
jest.mock("./util/http");
const mockedGet = get as jest.MockedFunction<typeof get>;

const mockSkipsData = [
  {
    id: 1,
    size: 2,
    hire_period_days: 7,
    price_before_vat: 100,
    transport_cost: 50,
    per_tonne_cost: 25,
    vat: 20,
    postcode: "NR32",
    area: "Lowestoft",
    forbidden: false,
    created_at: "2023-01-01",
    updated_at: "2023-01-01",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 2,
    size: 4,
    hire_period_days: 14,
    price_before_vat: 150,
    transport_cost: 60,
    per_tonne_cost: 30,
    vat: 20,
    postcode: "NR32",
    area: "Lowestoft",
    forbidden: false,
    created_at: "2023-01-01",
    updated_at: "2023-01-01",
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
];

describe("App Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("displays loading state initially", () => {
    mockedGet.mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(() => resolve([]), 500);
        })
    );

    render(<App />);
    // Check that loading text is displayed
    expect(screen.getByText(/fetching skips/i)).toBeInTheDocument();
  });

  test("displays skips after successful data fetch", async () => {
    // Mock successful API response
    mockedGet.mockResolvedValue(mockSkipsData);

    render(<App />);

    // Wait for loading to complete and skips to be displayed
    await waitFor(() => {
      expect(screen.queryByText(/fetching skips/i)).not.toBeInTheDocument();
    });

    // Check that skips are displayed (look for specific text that would appear)
    expect(screen.getByText("£100")).toBeInTheDocument(); // Price of first skip
    expect(screen.getByText("£150")).toBeInTheDocument(); // Price of second skip
  });

  test("displays error message when fetch fails", async () => {
    // Mock API failure
    mockedGet.mockRejectedValue(new Error("Failed to fetch data"));

    render(<App />);

    // Wait for error message to appear
    await waitFor(() => {
      expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument();
    });
  });
});
