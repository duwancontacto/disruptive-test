import React from "react";
import Image from "next/image";
import LogoFooter from "../assets/logoFooter.svg";
import Whatsapp from "../assets/Whatsapp.svg";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <div className=" bg-white  border-t border-t-gray-800">
      <a
        target="_blank"
        href="https://wa.me/+5491171410700"
        className=" fixed bottom-3 md:bottom-5 right-3 md:right-5 z-[100]"
      >
        <Image
          src={Whatsapp}
          alt="whatsapp"
          width={50}
          height={50}
          className=" mx-auto"
        />
      </a>
      <footer className="flex flex-col md:flex-row items-center  justify-around  p-3 border-b  py-0 font-anuphan font-light container">
        <div className="md:w-1/3 text-center pt-10 md:pt-0">
          <Image
            src={LogoFooter}
            alt="logoHausler"
            width={200}
            height={200}
            className=" mx-auto"
          />
          <a
            href="https://hausler.com.ar/terminos-y-condiciones/"
            className="text-[primaryDark] text-[12px] mt-3 text-center hover:text-primaryGreen"
          >
            Términos y Condiciones
          </a>
        </div>

        <div className=" flex flex-col justify-center text-center md:text-start pt-10  md:pt-10 md:w-1/3">
          <a
            href="tel:08103453460"
            target="_blank"
            className="text-[21px] text-primaryDark hover:text-primaryGreen"
          >
            0810 345 3460{" "}
          </a>
          <a
            href="mailto:info@hausler.com.ar"
            target="_blank"
            className="text-[21px] text-primaryDark hover:text-primaryGreen"
          >
            info@hausler.com.ar
          </a>
          <a
            href="https://wa.me/+5491171410700"
            target="_blank"
            className="text-[21px] text-primaryDark hover:text-primaryGreen"
          >
            +54 9 11 6356 7887
          </a>

          <p className="mt-3 text-[12px] text-primaryDark hover:text-primaryGreen">
            Si querés trabajar con nosotros, mandanos tu CV a: <br />
            <span className="font-bold"> reclutamiento@hausler.com.ar </span>
          </p>
        </div>
        <div className=" flex flex-col  text-[21px] lg:border-l border-l-gray-800  text-primaryDark text-center md:text-center font-light py-10 font-anuphan md:w-1/3 md:py-20">
          <div className="flex flex-col  mx-auto text-center md:text-start max-w-[100px]">
            <a
              target="_blank"
              href="https://www.facebook.com/HauslerArgentina/"
              className="hover:text-primaryGreen"
            >
              Facebook
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/hausler.arg/"
              className="hover:text-primaryGreen"
            >
              Instragam
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/hausler-cajas-de-seguridad-privadas/?originalSubdomain=ar"
              className="hover:text-primaryGreen"
            >
              Linkedin
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/c/HauslerCajasdeSeguridad"
              className="hover:text-primaryGreen"
            >
              Youtube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
