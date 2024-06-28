import React from "react";

export default function BookCard() {
  return (
    <div className="flex justify-center items-center  p-3 md:p-10 borderCard">
      <div className="text-center">
        <p className="text-[20px] text-[#172832] text-center">
          A modo de reserva se cobrará únicamente en tu tarjeta el primer mes de
          servicio.
        </p>
        <p className="text-[20px] text-[#172832]  text-center">
          el primer mes de servicio.
        </p>
        <p className="text-[#D9D9D9] text-[50px] leading-4  mt-8">$ xx.xxx </p>
        <p className="text-[#172832] text-[60px]  ">$xx.xxx</p>
        <p className="text-[20px] text-[#172832] text-center">por mes</p>
        <div className="block md:flex justify-center mt-9">
          <button className="text-[16px] text-[#172832] font-bold buttonReturn ">
            VOLVER A COTIZAR
          </button>
          <button className="text-[#FFFFFF] text-[16px] font-bold buttonQuote mx-4 ">
            CONFIRMAR
          </button>
        </div>
      </div>
    </div>
  );
}
