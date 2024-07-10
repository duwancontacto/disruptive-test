"use client";
import React from "react";
import SelectBrachTaps from "./SelectBrachTaps";
import CardSelectBrach from "./CardSelectBrach";
import Image from "next/image";
import fondoHome from "@/assets/fondoHome.svg";
import Consultation from "../Consultation";
import Steps from "..";
import useContentStore from "@/store/contentStore";
import { BranchSkeleton } from "@/Components/Skeletons/BranchSkeleton";
import useScrollToTop from "@/hooks/useScroll";

export default function SelectBranch() {
  useScrollToTop();
  const contents = useContentStore((state) => state.filterContents);
  return (
    <div className="flex flex-col min-h-screen  ">
      <main className="flex-1 bg-gray-100/40 dark:bg-gray-800/40 p-6 px-0 md:p-10">
        <div>
          <Image
            src={fondoHome}
            alt=""
            className="absolute z-[-1] w-full top-[0px]   left-0  object-cover"
            width={200}
            height={100}
          />
        </div>

        <>
          <p className="text-center text-[primaryDark] text-[30px] lg:text-[45px]">
            ¿Dónde querés tener
            <span className="font-bold ml-2 ">tu caja de Seguridad?</span>
          </p>
          <p className="text-center text-[primaryDark] text-[20px] lg:text-[25px] ">
            Elegí tu Sucursal más cercana y disfrutá de horarios de atención
            extendidos.
          </p>

          <Steps currentStep={1} />

          <SelectBrachTaps />
          <CardSelectBrach />

          <Consultation />
        </>
      </main>
    </div>
  );
}
