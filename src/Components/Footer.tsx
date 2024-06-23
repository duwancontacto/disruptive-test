import React from "react";
import Image from "next/image";
import LogoFooter from "../assets/logoFooter.svg";
export default function Footer() {
  return (
    <>
      <footer className="md:flex block items-center  justify-around  p-3 border-b">
        <div>
          <Image
            src={LogoFooter}
            alt="logoHausler"
            width={200}
            height={200}
            className=" mx-auto"
          />
          <p className="text-[#172832] text-[12px] md: mt-3 text-center md:text-start">
            Términos y Condiciones
          </p>
        </div>

        <div className="  justify-center text-center md:text-start">
          <div>
            <p className="text-[21px] text-[#172832]">0810 345 3460 </p>
            <p className="text-[21px] text-[#172832]">info@hausler.com.ar</p>
            <p className="text-[21px] text-[#172832]">+54 9 11 6356 7887</p>
          </div>

          <p className="mt-3 text-[12px] text-[#172832]">
            Si querés trabajar con nosotros, mandanos tu CV a:
            <p className="font-bold"> reclutamiento@hausler.com.ar </p>
          </p>
        </div>
        <div className="text-[21px] text-[#172832] text-center md:text-start">
          <p>FaceBook</p>
          <p>Instragam</p>
          <p> Linkedin</p>
          <p> Youtube</p>
        </div>
      </footer>
    </>
  );
}
