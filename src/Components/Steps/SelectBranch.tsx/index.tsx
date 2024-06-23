import React from "react";
import SelectBrachTaps from "./SelectBrachTaps";
import CardSelectBrach from "./CardSelectBrach";

export default function SelectBranch() {
  return (
    <>
      <p className="text-center text-[#172832] text-[45px]">
        ¿Dónde querés tener
        <span className="font-bold ml-2 ">tu caja de Seguridad?</span>
      </p>
      <p className="text-center text-[#172832] text-[25px]">
        Elegí tu Sucursal más cercana y disfrutá de horarios de atención
        extendidos.
      </p>
      <SelectBrachTaps />
      <CardSelectBrach />
    </>
  );
}
