"use client";
import React from "react";
import CardSelectSize from "./CardSelectSize";
import Consultation from "../Consultation";
import Image from "next/image";
import fondOtherPage from "@/assets/fondOtherPage.svg";
import Steps from "..";
import useScrollToTop from "@/hooks/useScroll";
import useContentStore from "@/store/contentStore";
export default function SelectSize() {
  useScrollToTop();

  const getContentBoxs = useContentStore((state) => state.getContentBoxs());

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1  p-6 px-2 md:p-10">
        <div>
          <Image
            src={fondOtherPage}
            alt=""
            className="absolute z-[-1] w-full top-0 left-0  object-cover "
            width={200}
            height={100}
          />
        </div>

        <div className="">
          <p className="text-center font-normal text-[primaryDark] text-[45px]">
            ¿Qué
            <span className="font-semibold ml-2 ">tamaño de caja</span>{" "}
            necesitás?
          </p>
          <p className="text-center text-[primaryDark] text-[25px] max-w-[700px] mx-auto">
            {getContentBoxs.robotic
              ? "Cada una de nuestras cajas robotizadas cuenta con un seguro asociado brindado por líderes de la industria."
              : "Cada una de nuestras cajas tradicionales cuenta con un seguro asociado brindado por líderes de la industria."}
          </p>
        </div>
        <Steps currentStep={2} />
        <CardSelectSize />
        <Consultation />
      </main>
    </div>
  );
}
