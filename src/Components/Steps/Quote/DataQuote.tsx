import React from "react";

export default function DataQuote() {
  return (
    <div className="  md:mt-0 mt-5">
      <p className="text-[#172832] opacity-90 text-[20px] md:text-[28px] lg:text-start text-center   ">
        Completá tus datos y accede a tu cotización.
      </p>
      <div className="mt-20">
        <p className="text-center m-0 text-[#172832] text-[18px] ">
          Nombre Y Apellido
        </p>
        <input
          type="text"
          className=" rounded inputQuote w-full text-center  "
        />
      </div>
      <div className="">
        <p className="text-center m-0 text-[#172832] text-[18px] mt-8">
          teléfono
        </p>
        <input
          type="number"
          className=" rounded inputQuote w-full text-center  "
          placeholder=""
        />
      </div>
      <div className="flex justify-center mt-20">
        <button className="text-[#FFFFFF] font-bold buttonQuote">
          Confirmar
        </button>
      </div>
    </div>
  );
}
