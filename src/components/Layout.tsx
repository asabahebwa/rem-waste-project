import { type ReactNode } from "react";
import StepHeader, { type BookingStep } from "./StepHeader";

type LayoutProps = {
  children: ReactNode;
  completedSteps: BookingStep[];
  currentStep: BookingStep;
};

function Layout({ children, completedSteps, currentStep }: LayoutProps) {
  return (
    <div className="bg-[#111827] min-h-screen">
      <header className="max-w-[80rem] mx-auto bg-[#111827] text-white border-b border-gray-800 pt-4">
        <StepHeader completedSteps={completedSteps} currentStep={currentStep} />
      </header>
      <main className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 bg-[#111827] text-white min-h-screen">
        {children}
      </main>
    </div>
  );
}

export default Layout;
