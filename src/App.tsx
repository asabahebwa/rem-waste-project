import { get } from "./util/http.ts";
import { type Skip } from "./components/Skips.tsx";
import Skips from "./components/Skips.tsx";
import ErrorMessage from "./components/ErrorMessage.tsx";
import "./App.css";
import { useEffect, useState } from "react";

type RawSkip = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

function App() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchSkips() {
      setIsFetching(true);
      try {
        const data = (await get(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        )) as RawSkip[];

        const skips: Skip[] = data.map((skip) => ({
          id: skip.id,
          size: skip.size,
          hire_period_days: skip.hire_period_days,
          price_before_vat: skip.price_before_vat,
          allowed_on_road: skip.allowed_on_road,
        }));
        setSkips(skips);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setSkips([]);
      }
      setIsFetching(false);
    }
    fetchSkips();
  }, []);

  if (isFetching) {
    return <div className="text-center">Fetching skips...</div>;
  }

  if (error) {
    return <ErrorMessage text={error} />;
  }
  return (
    <main className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 bg-[#111827] text-white">
      <Skips skips={skips} />
    </main>
  );
}

export default App;
