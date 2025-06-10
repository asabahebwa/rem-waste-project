import { type ReactNode, useEffect, useState } from "react";
import { get } from "./util/http.ts";
import { type Skip } from "./components/Skips.tsx";
import Skips from "./components/Skips.tsx";
import ErrorMessage from "./components/ErrorMessage.tsx";
import StepHeader, { type BookingStep } from "./components/StepHeader.tsx";
import "./App.css";
import Loading from "./components/Loading.tsx";

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

type LayoutProps = {
  children: ReactNode;
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
    if (selectedSkipId) {
      if (!completedSteps.includes("selectSkip")) {
        setCompletedSteps([...completedSteps, "selectSkip"]);
      }
    } else {
      if (completedSteps.includes("selectSkip")) {
        setCompletedSteps(
          completedSteps.filter((step) => step !== "selectSkip")
        );
      }
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

  function Layout({ children }: LayoutProps) {
    return (
      <div className="bg-[#111827] min-h-screen">
        <header className="max-w-[80rem] mx-auto bg-[#111827] text-white border-b border-gray-800 pt-4">
          <StepHeader
            completedSteps={completedSteps}
            currentStep={currentStep}
          />
        </header>
        <main className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 bg-[#111827] text-white min-h-screen">
          {children}
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <Layout>
        <ErrorMessage text={error} />
      </Layout>
    );
  }
  return (
    <Layout>
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
