export function BranchSkeleton() {
  const skeletonItems = [1, 2, 3, 4];

  return (
    <div className="p-4 space-y-8 max-w-[1000px] mx-auto">
      {skeletonItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row  p-5  rounded-md overflow-hidden animate-pulse"
        >
          <div className="w-full lg:w-1/3 h-48 bg-gray-300" />

          <div className="flex-1 p-4 space-y-4">
            <div className="h-6 bg-gray-300 rounded-md w-1/3" />
            <div className="h-4 bg-gray-300 rounded-md w-2/3" />
            <div className="h-4 bg-gray-300 rounded-md w-full" />
            <div className="h-4 bg-gray-300 rounded-md w-4/5" />
            <div className="h-4 bg-gray-300 rounded-md w-3/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function BranchCategorySkeleton() {
  const skeletonItems = [1, 2, 3, 4];

  return (
    <div className="p-4 space-y-8 max-w-[1000px] mx-auto">
      <div className="flex space-x-4 mb-4 mx-auto justify-center">
        {["Todas", "CABA", "GBA", "Interior"].map((tab, index) => (
          <div
            key={index}
            className="flex-1 h-10 bg-gray-300 max-w-[100px] animate-pulse rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
