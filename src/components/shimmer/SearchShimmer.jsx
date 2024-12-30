const SearchShimmer = () => {
  return (
    <div className="w-[800px] max-w-[90%]  p-2 flex gap-4 mx-auto ">
      <div className="mx-auto flex gap-4 animate-pulse">
        <div className="min-h-[100px] min-w-[100px] rounded-md bg-slate-300 "></div>
        <div className="flex flex-col gap-1 justify-evenly">
          <div className="min-h-[15px] min-w-[150px] md:min-w-[400px] rounded-md bg-slate-300"></div>
          <div className="min-h-[15px] min-w-[150px] md:min-w-[400px] rounded-md bg-slate-300"></div>
          <div className="min-h-[15px] min-w-[150px] md:min-w-[400px] rounded-md bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchShimmer;
