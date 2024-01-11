import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdStarHalf } from "react-icons/io";
import { LuDot } from "react-icons/lu";

const LatestMovies = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://movieshub-server-rp.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h3 className="font-bold bg-slate-700 border-b-2 border-red-400 p-3 mb-3">
        Latest Movies
      </h3>
      {products.slice(0, 10).map((product) => (
        <Link key={product._id} to={`/product_details/${product._id}`}>
          <div className="mb-3 h-28 bg-slate-700 grid grid-cols-3">
            <div className="col-span-1 h-full bg-slate-500 overflow-hidden">
              <img src={product.imageURL} alt="h-full object-cover" />
            </div>
            <div className="col-span-2 p-2 flex flex-col justify-between">
              <h4 className="text-sm font-bold">{product.productName}</h4>
              <div className="flex items-center">
                <p className="text-sm">{product.brandName}</p>
                <LuDot />
                <p className="text-sm flex items-center">
                  <IoMdStarHalf className="text-lg" />
                  {product.rating}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestMovies;
