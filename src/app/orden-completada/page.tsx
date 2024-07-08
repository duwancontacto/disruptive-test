"use client";
import Footer from "@/Components/Footer";
import { Nav } from "@/Components/Nav";

import { useEffect } from "react";
import useContentStore from "@/store/contentStore";

import ConfirmationPage from "@/Components/Steps/ConfirmPurchase";
export default function Home() {
  const { getCategories, getContents, preLoadOrder } = useContentStore(
    (state) => ({
      getCategories: state.getThemesAndCategories,
      getContents: state.getContents,
      step: state.step,
      preLoadOrder: state.preLoadOrder,
    })
  );

  useEffect(() => {
    preLoadOrder();

    getCategories();
    getContents();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      <Nav />
      <main className="flex-1 bg-gray-100/40 dark:bg-gray-800/40 p-6 md:p-10">
        <ConfirmationPage />
      </main>

      <Footer />
    </div>
  );
}
