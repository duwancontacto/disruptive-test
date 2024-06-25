"use client";
import Footer from "@/Components/Footer";
import { Nav } from "@/Components/Nav";
import SelectBranch from "@/Components/Steps/SelectBranch.tsx";
import Image from "next/image";
import fondoHome from "@/assets/fondoHome.svg";
import { useEffect } from "react";
import useContentStore from "@/store/contentStore";

export default function Home() {
  const { getCategories, getContents } = useContentStore((state) => ({
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
          <Image
            src={fondoHome}
            alt=""
            className="absolute z-[-1] w-full top-0 left-0 h-full object-cover "
            width={200}
            height={100}
          />
        </div>
        <div>
          <SelectBranch />
        </div>
      </main>
      <Footer />
    </div>
  );
}
