const LatestMovies = () => {
  return (
    <div>
      <h3 className="font-bold bg-slate-700 border-b-2 border-red-400 p-3 mb-3">
        Latest Movies
      </h3>
      <div className="h-28 bg-slate-700 grid grid-cols-3">
        <div className="col-span-1 h-full bg-slate-500">Img</div>
        <div className="col-span-2 p-2">
          <h4>Title</h4>
          <p>Category</p>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default LatestMovies;
