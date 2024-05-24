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
import LoginModal from "../Authentication/Login";
import { useState } from "react";
import RegisterModal from "../Authentication/Register";
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
      <header className="flex items-center justify-between h-16 px-6 border-b">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href="#"
        >
          <FaPhotoVideo className="w-6 h-6" />
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            <Input
              value={search}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 rounded-md bg-white shadow-sm dark:bg-gray-900 dark:text-gray-200"
              placeholder="Search content..."
              type="search"
            />
          </div>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full border border-gray-500 w-8 h-8 dark:border-gray-800"
                  size="icon"
                  variant="ghost"
                >
                  <CiUser size={25} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => modalAuthOpen("login")} size="sm">
              Log in
            </Button>
          )}
        </div>
        <LoginModal />
        <RegisterModal />
      </header>
    </>
  );
}
