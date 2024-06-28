import Image from "next/image";
import React from "react";
import boxFinal from "@/assets/boxFinal.svg";
export default function PaymentMethods2() {
  return (
    <div className=" w-full  p-0 md:p-10">
      <div className="block md:flex  justify-center md:justify-start items-center mt-5 lg:mt-0">
        <div>
          <Image
            src={boxFinal}
            alt=""
            className=" object-cover "
            width={100}
            height={100}
          />
        </div>
        <div className="text-[#172832] text-[14px] ml-5">
          <p className="text-[#172832] text-[14px] font-semibold">
            Cajas de Seguridad{" "}
          </p>
          <p className="text-[#172832] text-[14px]">Alto palermo - mediana</p>
          <p className="text-[#172832] text-[14px]">Cantidad: 1</p>
        </div>
      </div>
      <p className="text-[#172832] text-[16px] opacity-80 text-end">$xxxxxx</p>
      <div className=" w-full  CarBottomBar ml-1 mt-6 "></div>
      <div className="flex justify-between items-center">
        <p className="text-[#172832] text-[16px] mt-7 text-start ">TOTAL</p>
        <p className="text-[#172832] text-[16px] mt-7 text-end font-bold">
          $xxxxxx
        </p>
      </div>

      <div className=" w-full  CarBottomBar ml-1  my-4 "></div>
      <div className="flex items-center justify-start opacity-90">
        <input type="checkbox" className=" checked:bg-lime-400 " />
        <p className="font-semibold ml-4 text-[#172832] text-[18px]">
          Mercadopago
        </p>
      </div>

      <div className="flex items-center justify-start my-5 opacity-90">
        <input type="checkbox" className="default:ring-rose-200 ..." />
        <p className="font-semibold ml-4 text-[#172832] text-[18px]">
          Transferencia / depósito
        </p>
      </div>

      <div className="flex items-center opacity-90">
        <input type="checkbox" className="default:ring-rose-200" />
        <p className="font-semibold ml-4 text-[#172832] text-[18px] ">
          HE LEÍDO Y ESTOY DE ACUERDO CON LOS TÉRMINOS Y CONDICIONES DE LA WEB*
        </p>
      </div>
      <button className="text-[#FFFFFF] text-[16px] font-bold buttonQuote mt-10 ">
        CONTRATAR
      </button>
      <p className="text-[16px] font-bold opacity-70 mt-5">
        Si todavía tenés dudas,
        <span className="text-[#009080] text-[16px] border-b-2 border-[#009080] font-bold">
          contactate con un asesor.
        </span>{" "}
      </p>
    </div>
  );
}
