import React from "react";

export default function SelectBrachTaps() {
  return (
    <div className="pc-0 md:px-40">
      <div className="md:flex block justify-around items-center  mt-10 border-solid border-b-2">
        <button className="cursor-pointer my-1 w-[87px] h-[37px] bg-[#000000]-500 shadow-lg shadow-[#000000]-500/50  border text-[16px]  bg-[#172832] text-[#FFFFFF] ">
          Todas
        </button>
        <button className="cursor-pointer my-1 w-[87px] h-[37px]  border text-[16px]   text-[#172832] ">
          CABA
        </button>
        <button className="cursor-pointer my-1 w-[87px] h-[37px] border text-[16px]   text-[#172832] ">
          GBA
        </button>
        <button className="cursor-pointer w-[87px] h-[37px] border text-[16px]   text-[#172832] ">
          Interior
        </button>
      </div>
    </div>
  );
}
