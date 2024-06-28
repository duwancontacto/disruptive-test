import Image from "next/image";
import React from "react";
import fondOtherPage from "@/assets/fondOtherPage.svg";
import DataQuote from "./DataQuote";
import ChooseUs from "./ChooseUs";

export default function Quote() {
  return (
    <div className="flex flex-col min-h-screen z-30 max-w-md md:max-w-6xl mx-auto">
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
          <p className="text-[#172832] md:text-[47px] text-[25px] text-center ">
            Estás a un paso de
            <span className="font-bold ms-3 md:text-[47px] text-[25px] ">
              contratar tu caja{" "}
            </span>
          </p>
          <p className="text-[#172832] md:text-[47px] text-[25px] text-center font-bold  ">
            de seguridad privada
          </p>
        </div>
        <div className="lg:flex block justify-between  mt-10">
          <ChooseUs />

          <DataQuote />
        </div>
      </main>
    </div>
  );
}
