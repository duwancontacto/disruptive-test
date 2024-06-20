"use client";
import Link from "next/link";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaPhotoVideo } from "react-icons/fa";
import { Button } from "../ui/button";
import useAuthStore, { IAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

import { useState } from "react";

import useContentStore from "@/store/contentStore";

export function Nav() {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const [searchTimeout, setSearchTimeout] = useState<any>(null);
  const { isAuthenticated, logout, modalAuthOpen } = useAuthStore(
    (state: IAuthStore) => ({
      isAuthenticated: state.isAuthenticated,
      logout: state.logout,
      login: state.login,
      modalAuthOpen: state.modalAuthOpen,
    })
  );

  const getContents = useContentStore((state) => state.getContents);

  const handleLogout = () => {
    logout();
    route.push("/");
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    const time = setTimeout(() => {
      getContents(e.target.value);
    }, 500);

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(time);
  };

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
