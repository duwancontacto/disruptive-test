import React from "react";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { RiPhoneLockLine } from "react-icons/ri";
import { PiHandshakeLight } from "react-icons/pi";
import borderWhy from "@/assets/box.svg";
import { MdOutlinePrivacyTip } from "react-icons/md";
import Image from "next/image";
export default function ChooseUs() {
  return (
    <>
      <div className=" relative  w-full text-center rounded-lg  ">
        <Image
          src={borderWhy}
          width={500}
          height={500}
          alt="border"
          className=" h-full z-[-1] mx-auto"
        />

        {/*  <div className="  pt-0 md:p-16 ">
          <h1 className="text-6xl font-bold text-gray-900 ">
            <span className="font-light flex flex-row items-center">
              <span className="text-teal-500 text-[30px]">[</span> Por qué
              <span className="text-teal-500">.</span>
            </span>

            <span className="text-teal-600">elegirnos:</span>
          </h1>

          <div className=" w-full  CarBottomBar max-w-[300px] mt-5 ml-1 "></div>
          <ul className="space-y-4 pt-4 pb-7">
            <li className="flex items-center">
              <CiCreditCard2 className=" mr-1" size={25} color="primaryDark" />
              <span>Amplia disponibilidad de tamaños de cajas</span>
            </li>
            <li className="flex items-center">
              <IoCalendarOutline
                className=" mr-1"
                size={25}
                color="primaryDark"
              />
              <span>Flexibilidad horaria</span>
            </li>
            <li className="flex items-center">
              <RiPhoneLockLine
                className=" mr-1"
                size={25}
                color="primaryDark"
              />
              <span>Salas de negocios privadas</span>
            </li>
            <li className="flex items-center">
              <PiHandshakeLight
                className=" mr-1"
                size={25}
                color="primaryDark"
              />
              <span>Plazos de contratación</span>
            </li>
            <li className="flex items-center">
              <MdOutlinePrivacyTip
                className=" mr-1"
                size={25}
                color="primaryDark"
              />
              <span>Calidad de servicio</span>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
}
