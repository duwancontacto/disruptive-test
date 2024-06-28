import React from "react";
import {CiLocationOn} from "react-icons/ci";
import locationHire from "@/assets/locationHire.svg";
import Image from "next/image";
export default function CardHireLocation() {
  return (
    <div className="">
      <div>
        <Image
          src={locationHire}
          alt=""
          className=" z-[1] w-full h-full object-cover "
          width={50}
          height={50}
        />
      </div>
      <div className="flex items-center">
        <CiLocationOn size={40} className="" />

        <h6 className="text-[#009080] font-bold pl-1 text-[30px] my-2 ">
          Sucursal Unicenter
        </h6>
      </div>
      <div className=" w-full  CarBottomBar ml-1 "></div>
      <p className="text-[#172832] text-[16px]  my-2 opacity-90">
        Paraná 3617 | Martínez | PB Local 1009
      </p>
    </div>
  );
}
