import { Skeleton } from "../ui/skeleton";

export function LoadingGrid() {
  const skeletons = Array.from({ length: 12 }).map((_, i) => i);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skeletons.map((i) => (
        <div
          key={i}
          className="bg-white rounded-lg overflow-hidden shadow-sm dark:bg-gray-900"
        >
          <Skeleton className="w-full aspect-video" />
          <div className="p-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-3/4 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}
