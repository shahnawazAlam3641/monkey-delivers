const ShimmerCard = () => {
  return (
    <div className="m-5 flex h-[300px] w-[350px] flex-col gap-3 rounded-lg bg-slate-100 p-4 max-w-[90%] mx-auto">
      <div className="h-[65%] w-full rounded-md bg-slate-300 animate-pulse" />
      <div className="h-4 w-full rounded-md bg-slate-300 animate-pulse" />
      <div className="h-4 w-full rounded-md bg-slate-300 animate-pulse" />
      <div className="h-4 w-full rounded-md bg-slate-300 animate-pulse" />
    </div>
  );
};

export default ShimmerCard;
