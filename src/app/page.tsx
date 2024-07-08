"use client";
import Footer from "@/Components/Footer";
import { Nav } from "@/Components/Nav";
import SelectBranch from "@/Components/Steps/SelectBranch.tsx";

import { useEffect } from "react";
import useContentStore from "@/store/contentStore";
import SelectSize from "@/Components/Steps/SelectSize";

import Quote from "@/Components/Steps/Quote";
import Hire from "@/Components/Steps/Hire";
import FinalizePurchase from "@/Components/Steps/FinalizePurchase";
import ConfirmationPage from "@/Components/Steps/ConfirmPurchase";
export default function Home() {
  const { getCategories, getContents, step } = useContentStore((state) => ({
    getCategories: state.getThemesAndCategories,
    getContents: state.getContents,
    step: state.step,
  }));

  useEffect(() => {
    getCategories();
    getContents();

    //eslint-disable-next-line
  }, []);

  const steps: { [key: number]: () => React.JSX.Element } = {
    1: SelectBranch,
    2: SelectSize,
    3: Quote,
    4: Hire,
    5: FinalizePurchase,
    6: ConfirmationPage,
  };

  const StepComponent = steps[step] || SelectBranch;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      <Nav />
      <main className="flex-1 bg-gray-100/40 dark:bg-gray-800/40 p-6 md:p-10">
        <StepComponent />
      </main>

      <Footer />
    </div>
  );
}
