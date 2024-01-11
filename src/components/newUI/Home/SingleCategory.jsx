import { Link } from "react-router-dom";
import { IoPlayCircleOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const SingleCategory = ({ categoryName, products }) => {
  return (
    <div>
      <h3 className="bg-slate-700 border-b-2 border-red-400 p-3 my-3 flex justify-between items-center">
        <span className="font-bold">{categoryName}</span>
        <button className="rounded-md py-1 px-2 bg-red-500 text-white text-xs uppercase hover:bg-red-400 active:scale-95">
          See All
        </button>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products?.map((product) => (
          <Link key={product._id} to={`/product_details/${product._id}`}>
            <div className="bg-slate-700 h-96 md:h-64 overflow-hidden relative group">
              <img
                src={product.imageURL}
                alt=""
                className="object-cover w-full h-full group-hover:scale-110 duration-300"
              />
              <div className="absolute hover:bg-slate-950/75 inset-0 flex justify-center items-center duration-200">
                <IoPlayCircleOutline className="text-6xl scale-0 group-hover:scale-100 duration-300 ease-in-out" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
