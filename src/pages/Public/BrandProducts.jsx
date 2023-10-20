import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BrandProducts = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const currentBrandProducts = products.filter(
    (product) => product.brandName === location.state
  );

  if (currentBrandProducts.length === 0) {
    console.log("there is no existing product of the brand");
  } else {
    console.log(currentBrandProducts);
  }

  return (
    <>
      {currentBrandProducts.length === 0 ? (
        <div className="text-center my-5">
          There is no existing product of the brand
        </div>
      ) : (
        <div className="w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
          {currentBrandProducts.map((product) => (
            <div
              key={product._id}
              className="card card-side bg-base-100 shadow-xl"
            >
              <figure>
                <img src={product.imageURL} alt="Movie" className="h-56" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/product_details/${product._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BrandProducts;
