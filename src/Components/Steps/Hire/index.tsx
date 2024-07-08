import Image from "next/image";
import React from "react";
import fondOtherPage from "@/assets/fondOtherPage.svg";
import CardHire from "./CardHire";
import Steps from "..";
import useScrollToTop from "@/hooks/useScroll";
export default function Hire() {
  useScrollToTop();
  return (
    <div className="flex flex-col min-h-screen z-30 max-w-md md:max-w-6xl mx-auto ">
      <main className="flex-1  pp-0 md:p-10">
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
          <p className="text-[primaryDark] md:text-[48px] text-[25px] text-center  font-bold">
            Tu contratación
          </p>
          <p className="text-[primaryDark] md:text-[28px] text-[28px] text-center opacity-90 ">
            Verificá los detalles de tu selección.
          </p>
        </div>

        <Steps currentStep={4} />
        <CardHire />
      </main>
    </div>
  );
}
