import React from "react";

export default function Consultation() {
  return (
    <div className="text-center z-[3] mt-10 rounded-sm md:rounded-full border border-[#009080] p-5">
      <p className="text-[#172832] text-[24px] font-bold">
        ¿Tenés alguna consulta sobre cuál es la mejor sucursal para vos?
      </p>
      <p className="text-[24px] text-[#172832]">
        Comunicate con el <span className="font-bold">0810-345-3460</span> o a
        través de{" "}
        <span className="text-[#3AD8AB] border-b-2 border-[#3AD8AB] cursor-pointer font-medium">
          Whatsapp
        </span>
      </p>

      <p className="text-[24px] text-[#172832]">
        y un asesor especializado te podrá responder.
      </p>
    </div>
  );
}
