import { useEffect, useState } from "react";
import { get } from "./util/http.ts";
import { type Skip } from "./components/Skips.tsx";
import Skips from "./components/Skips.tsx";
import ErrorMessage from "./components/ErrorMessage.tsx";
import Loading from "./components/Loading.tsx";
import Layout from "./components/Layout.tsx";
import { type BookingStep } from "./components/StepHeader.tsx";
import "./App.css";

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
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<BookingStep[]>([
    "postcode",
    "wasteType",
  ]);
  const currentStep: BookingStep = "selectSkip";

  const selectedSkip = skips.find((skip: Skip) => skip.id === selectedSkipId);

  useEffect(() => {
    if (selectedSkipId && !completedSteps.includes("selectSkip")) {
      setCompletedSteps((prevSteps) => [...prevSteps, "selectSkip"]);
    }
  }, [selectedSkipId, completedSteps]);

  const handleSelectSkip = (skipId: number) => {
    setSelectedSkipId(skipId);
  };

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

  if (error) {
    return (
      <Layout completedSteps={completedSteps} currentStep={currentStep}>
        <ErrorMessage text={error} />
      </Layout>
    );
  }
  return (
    <Layout completedSteps={completedSteps} currentStep={currentStep}>
      {isFetching ? (
        <Loading />
      ) : (
        <Skips
          skips={skips}
          selectedSkip={selectedSkip}
          handleSelectSkip={handleSelectSkip}
          selectedSkipId={selectedSkipId}
        />
      )}
    </Layout>
  );
}

export default App;
