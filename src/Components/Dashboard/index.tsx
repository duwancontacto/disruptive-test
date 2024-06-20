"use client";
import { Nav } from "./Nav";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 bg-gray-100/40 dark:bg-gray-800/40 p-6 md:p-10">
        <div className="max-w-6xl mx-auto"></div>
      </main>
    </div>
  );
}
