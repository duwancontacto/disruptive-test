import React from "react";

export default function Consultation() {
  return (
    <div className="text-center z-[3] mt-20 rounded-3xl max-w-[900px] mx-auto md:rounded-full border border-[#009080] p-10 ">
      <p className="text-[primaryDark] text-[24px] ">
        <span className="font-bold">
          ¿Tenés alguna consulta sobre cuál es la mejor sucursal para vos?{" "}
          <br />
        </span>
        Comunicate con el <span className="font-bold">0810-345-3460</span> o a
        través de{" "}
        <span className="text-[#3AD8AB] border-b-2 border-[#3AD8AB] cursor-pointer font-medium">
          Whatsapp
        </span>{" "}
        y un asesor especializado te podrá responder.
      </p>
    </div>
  );
}
