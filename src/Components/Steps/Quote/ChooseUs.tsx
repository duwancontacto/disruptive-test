import React from "react";
import {CiCreditCard2} from "react-icons/ci";
import {IoCalendarOutline} from "react-icons/io5";
import {RiPhoneLockLine} from "react-icons/ri";
import {PiHandshakeLight} from "react-icons/pi";
import {MdOutlinePrivacyTip} from "react-icons/md";
export default function ChooseUs() {
  return (
    <div className="p-6 borderBox">
      <p className="text-[#172832] text-[50px] text-center lg:text-start">
        Por qué
      </p>
      <p className="text-[#009080] text-[50px] font-bold text-center lg:text-start">
        elegirnos:
      </p>
      <div className=" w-full  CarBottomBar ml-1 "></div>
      <div className="flex justify-start items-center my-2">
        <CiCreditCard2 className=" mr-1" size={25} color="#172832" />
        <p className="text-[#172832] text-[18px]">
          Amplia disponibilidad de tamaños de cajas
        </p>
      </div>
      <div className="flex justify-start items-center my-2">
        <IoCalendarOutline className=" mr-1" size={25} color="#172832" />
        <p className="text-[#172832] text-[18px]">Flexibilidad horaria</p>
      </div>
      <div className="flex justify-start items-center my-2">
        <RiPhoneLockLine className=" mr-1" size={25} color="#172832" />
        <p className="text-[#172832] text-[18px]">Salas de negocios privadas</p>
      </div>{" "}
      <div className="flex justify-start items-center my-2">
        <PiHandshakeLight className=" mr-1" size={25} color="#172832" />
        <p className="text-[#172832] text-[18px]">Plazos de contratación</p>
      </div>{" "}
      <div className="flex justify-start items-center my-2">
        <MdOutlinePrivacyTip className=" mr-1" size={25} color="#172832" />
        <p className="text-[#172832] text-[18px]">Calidad de servicio</p>
      </div>
    </div>
  );
}
