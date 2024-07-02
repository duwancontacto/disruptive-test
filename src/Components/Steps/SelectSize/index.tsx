import React from "react";
import CardSelectSize from "./CardSelectSize";
import Consultation from "../Consultation";
import Image from "next/image";
import fondOtherPage from "@/assets/fondOtherPage.svg";
import Steps from "..";
export default function SelectSize() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1  p-6 md:p-10">
        <div>
          <Image
            src={fondOtherPage}
            alt=""
            className="absolute z-[-1] w-full top-0 left-0 h-full object-cover "
            width={100}
            height={100}
          />
        </div>

        <div className="">
          <p className="text-center text-[primaryDark] text-[45px]">
            ¿Qué
            <span className="font-bold ml-2 ">tamaño de caja</span> necesitás?
          </p>
          <p className="text-center text-[primaryDark] text-[25px]">
            Cada una de nuestras cajas robotizadas cuenta con un seguro asociado
            brindado por líderes de la industria.
          </p>
        </div>
        <Steps currentStep={2} />
        <CardSelectSize />
        <Consultation />
      </main>
    </div>
  );
}
