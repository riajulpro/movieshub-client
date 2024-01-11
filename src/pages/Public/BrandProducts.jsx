import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";

const BrandProducts = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("https://movieshub-server-rp.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const currentBrandProducts = products.filter(
    (product) => product.brandName === location.state
  );

  return (
    <>
      <Helmet>
        <title>Movies of {location.state}</title>
      </Helmet>
      <div className="md:w-9/12 mx-auto my-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <Link
                to={`/product_details/${product._id}`}
                className="cursor-pointer"
              >
                <img src={product.imageURL} alt="" className="md:h-96" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {currentBrandProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-between gap-1 my-5 md:my-10">
          <img
            src="https://i.ibb.co/gwsFYfc/2953962-removebg-preview.png"
            alt=""
          />
          <p>There is no existing product of the brand</p>
        </div>
      ) : (
        <div className="w-11/12 md:w-9/12 mx-auto grid grid-cols-1 gap-3 my-5">
          {currentBrandProducts.map((product) => (
            <div
              key={product._id}
              className="card lg:card-side bg-base-100 shadow-xl"
            >
              <figure className="flex-1">
                <img src={product.imageURL} alt="Movie" className="h-80" />
              </figure>
              <div className="flex-1">
                <h2 className="card-title">Name: {product.productName}</h2>
                <p className="text-sm">Brand: {product.brandName}</p>
                <p className="text-sm">Type: {product.type}</p>
                <p className="text-sm">Price: {product.price}</p>
                <p className="text-sm">Rating: {product.rating}/10</p>
                <div className="card-actions justify-end">
                  <Link to={`/update_product/${product._id}`}>
                    <button className="btn btn-primary">Update</button>
                  </Link>
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
