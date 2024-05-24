import useAuthStore from "@/store/authStore";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
export function ContentNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <div className="text-center space-y-4">
        <CiSearch className="w-16 h-16 text-gray-400 mx-auto" />
        <h3 className="text-2xl font-bold">No Content Found</h3>
        <p className="text-gray-500 dark:text-gray-400">
          It looks like you haven&apos;t added any content yet.
        </p>
      </div>
    </div>
  );
}
