"use client";
import Footer from "@/Components/Footer";
import {Nav} from "@/Components/Nav";
import SelectBranch from "@/Components/Steps/SelectBranch.tsx";

import {useEffect} from "react";
import useContentStore from "@/store/contentStore";
import SelectSize from "@/Components/Steps/SelectSize";

import {FaWhatsapp} from "react-icons/fa";
import Quote from "@/Components/Steps/Quote";
import Hire from "@/Components/Steps/Hire";
import FinalizePurchase from "@/Components/Steps/FinalizePurchase";
export default function Home() {
  const {getCategories, getContents} = useContentStore((state) => ({
    getCategories: state.getThemesAndCategories,
    getContents: state.getContents,
  }));

  useEffect(() => {
    getCategories();
    getContents();

    //eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 bg-gray-100/40 dark:bg-gray-800/40 p-6 md:p-10">
        <div>
          {/*    <SelectBranch />  */}
          {/*     <SelectSize /> */}
          {/*  <Quote /> */}
          {/*    <Hire /> */}
          <FinalizePurchase />
        </div>
        <div className="flex justify-end">
          <FaWhatsapp
            color={"#3AD8AB"}
            size={60}
            className="mt-5 cursor-pointer"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
