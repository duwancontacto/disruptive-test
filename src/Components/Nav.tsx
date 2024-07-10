"use client";
import Image from "next/image";
import LogoHausler from "@/assets/logoHausler.svg";
import useContentStore from "@/store/contentStore";

export function Nav() {
  const setStep = useContentStore((state) => state.setStep);
  return (
    <>
      <header className="flex items-center bg-white justify-center h-16 px-6 mb-5  py-12 ">
        <button
          className="flex items-center gap-2 text-lg font-semibold"
          onClick={() => {
            setStep(1);
          }}
        >
          <div>
            <Image
              src={LogoHausler}
              alt="logoHausler"
              width={150}
              height={100}
            />
          </div>
        </button>
      </header>
    </>
  );
}
