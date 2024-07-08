import Image from "next/image";
import React from "react";
import fondOtherPage from "@/assets/fondOtherPage.svg";
import DataQuote from "./DataQuote";
import ChooseUs from "./ChooseUs";
import Steps from "..";
import useScrollToTop from "@/hooks/useScroll";

export default function Quote() {
  useScrollToTop();
  return (
    <div className="flex flex-col min-h-screen z-30 max-w-md md:max-w-6xl mx-auto">
      <main className="flex-1  p-6 md:p-10">
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
          <p className="text-[primaryDark] md:text-[47px] text-[25px] text-center ">
            Estás a un paso de
            <span className="font-bold ms-3 md:text-[47px] text-[25px] ">
              contratar tu caja{" "}
            </span>
          </p>
          <p className="text-[primaryDark] md:text-[47px] text-[25px] text-center font-bold  ">
            de seguridad privada
          </p>
        </div>
        <Steps currentStep={3} />

        <div className="lg:flex text-center block justify-between  mt-10 gap-20">
          <ChooseUs />
          <DataQuote />
        </div>
      </main>
    </div>
  );
}
