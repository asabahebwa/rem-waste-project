import { get } from "./util/http";
import { type Skip } from "./components/Skips";
import Skips from "./components/Skips";
import ErrorMessage from "./components/ErrorMessage";
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
          price_before_vat: skip.hire_period_days,
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
    return <div>Fetching skips...</div>;
  }

  if (error) {
    return <ErrorMessage text={error} />;
  }
  return (
    <div>
      <Skips skips={skips} />
    </div>
  );
}

export default App;
