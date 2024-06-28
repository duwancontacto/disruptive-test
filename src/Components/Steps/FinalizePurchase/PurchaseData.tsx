import React from "react";

export default function PurchaseData() {
  return (
    <div className=" w-full p-0 md:p-5 ">
      <p className="text-[#172832] text-[40px] opacity-90  mt-10 lg:mt-0">
        Tus datos
      </p>
      <div className="">
        <div className=" mt-10 md:mt-20">
          <p className="text-center m-0 text-[#172832] text-[18px] ">
            Nombre Y Apellido
          </p>
          <input type="text" className=" rounded inputQuote  w-full   " />
        </div>
        <div className="mt-20  ">
          <p className="text-center m-0 text-[#172832] text-[18px] ">Dni</p>
          <input
            type="text"
            className="  rounded inputQuote  text-center w-full  "
          />
        </div>

        <div className="mt-20">
          <p className="text-center m-0 text-[#172832] text-[18px] mt-8">
            teléfono
          </p>
          <input
            type="number"
            className=" rounded inputQuote  w-full text-center  "
            placeholder=""
          />
        </div>

        <div className="mt-20">
          <p className="text-center m-0 text-[#172832] text-[18px] ">Email</p>
          <input
            type="text"
            className=" rounded inputQuote  w-full text-center  "
          />
        </div>
        <div className="mt-20">
          <p className="text-center m-0 text-[#172832] text-[18px] ">
            notas del pedido (opcional)
          </p>
          <input
            type="text"
            className=" rounded inputQuote  w-full text-center  "
          />
        </div>
      </div>
    </div>
  );
}
