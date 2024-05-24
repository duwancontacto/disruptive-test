"use client";
import { Nav } from "./Nav";
import { LoadingGrid } from "./LoadingGrid";
import { ContentGrid } from "./ContentGrid";
import { HeaderGrid } from "./HeaderGrid";
import useContentStore from "@/store/contentStore";
import { useEffect } from "react";

export default function Component() {
  const loadingContents = useContentStore((state) => state.loadingContents);

  useEffect(() => {
    useContentStore.getState().getContents();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 bg-gray-100/40 dark:bg-gray-800/40 p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          <HeaderGrid />

          {loadingContents ? <LoadingGrid /> : <ContentGrid />}
        </div>
      </main>
    </div>
  );
}
