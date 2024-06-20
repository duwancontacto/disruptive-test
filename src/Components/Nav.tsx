"use client";
import Link from "next/link";

import { FaPhotoVideo } from "react-icons/fa";

export function Nav() {
  return (
    <>
      <header className="flex items-center justify-center h-16 px-6 border-b">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href="#"
        >
          <FaPhotoVideo className="w-6 h-6" />
        </Link>
      </header>
    </>
  );
}
