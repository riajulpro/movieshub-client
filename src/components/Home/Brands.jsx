import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch(
      "https://riajulpro-assingment-10-lae88il3n-riajul-pros-projects.vercel.app/brands"
    )
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
      {brands.map((brand) => (
        <Link key={brand._id} to={"/brand_products"} state={brand.brandName}>
          <div className="flex flex-col justify-between bg-slate-100 hover:bg-info rounded-md p-5 hover:cursor-pointer">
            <img src={brand.brandLogo} alt="" />
            <p className="text-xl font-bold text-black">{brand.brandName}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Brands;
