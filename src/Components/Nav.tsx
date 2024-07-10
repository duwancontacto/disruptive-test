"use client";
import Link from "next/link";
import Image from "next/image";
import LogoHausler from "@/assets/logoHausler.svg";
import { FaPhotoVideo } from "react-icons/fa";

export function Nav() {
  return (
    <>
      <header className="flex items-center bg-white justify-center h-16 px-6 mb-5  py-12 ">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href="#"
        >
          <div>
            <Image
              src={LogoHausler}
              alt="logoHausler"
              width={150}
              height={100}
            />
          </div>
        </Link>
      </header>
    </>
  );
}
