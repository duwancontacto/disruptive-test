import Image from "next/image";
import React from "react";
import mediumBox from "@/assets/mediumBox.svg";
import {CiCreditCard2} from "react-icons/ci";
export default function CardHireBox() {
  return (
    <div className=" border-r-2 border-[#009080]">
      <div>
        <div className="md:shrink-0  w-full   flex justify-center items-center   px-7 ">
          <Image
            src={mediumBox}
            alt="Retreat Image"
            width={350}
            height={50}
            className="  object-cover w-full h-full   "
          />
        </div>
      </div>
      <div className="w-full   p-9  ">
        <div className="flex items-center">
          <CiCreditCard2 size={40} className="" />

          <h6 className="text-[#009080] font-bold pl-1 text-[30px] my-2 ">
            Chica
          </h6>
        </div>
        <div className=" w-full  CarBottomBar ml-1 "></div>
        <p className="text-[#172832] text-[16px] opacity-90 my-2">
          Entran hasta <span className="font-bold">250.000 USD </span>
        </p>
        <p className="text-[#172832] text-[16px] opacity-90">
          Caben documentos hasta <span className="font-bold">tamaño A4</span>
        </p>
      </div>
    </div>
  );
}
