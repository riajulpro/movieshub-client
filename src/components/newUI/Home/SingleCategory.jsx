const SingleCategory = ({ categoryName }) => {
  return (
    <div>
      <h3 className="bg-slate-700 border-b-2 border-red-400 p-3 my-3 flex justify-between items-center">
        <span className="font-bold">{categoryName}</span>
        <button className="rounded-md py-1 px-2 bg-red-500 text-white text-xs uppercase hover:bg-red-400 active:scale-95">
          See All
        </button>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="bg-slate-700 h-64"></div>
        <div className="bg-slate-700 h-64"></div>
        <div className="bg-slate-700 h-64"></div>
        <div className="bg-slate-700 h-64"></div>
        <div className="bg-slate-700 h-64"></div>
        <div className="bg-slate-700 h-64"></div>
        <div className="bg-slate-700 h-64"></div>
        <div className="bg-slate-700 h-64"></div>
      </div>
    </div>
  );
};

export default SingleCategory;
