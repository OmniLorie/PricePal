const TableSkeleton = () => {
  return (
    <div className="w-full mx-auto p-6">
      <div className="flex justify-between items-center mb-2">
        <div className="skeleton skeleton-text w-1/3"></div>
        <div className="skeleton skeleton-text w-1/6"></div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 p-4 font-semibold text-base sm:text-lg bg-gray-200">
        <div className="skeleton skeleton-text w-full"></div>
        <div className="skeleton skeleton-text w-full"></div>
        <div className="skeleton skeleton-text w-full"></div>
        <div className="skeleton skeleton-text w-full"></div>
        <div className="skeleton skeleton-text w-full hidden sm:block"></div>
      </div>

      <div className="border-y">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-4 sm:grid-cols-5 gap-4 py-4 items-center px-4 sm:px-5"
          >
            <div className="flex items-center gap-2 col-span-1">
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text w-1/2"></div>
            </div>
            <div className="skeleton skeleton-text w-full"></div>
            <div className="skeleton skeleton-text w-full"></div>
            <div className="skeleton skeleton-text w-full"></div>
            <div className="skeleton skeleton-text w-full hidden sm:block"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;
