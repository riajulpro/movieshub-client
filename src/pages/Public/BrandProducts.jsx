import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
              <img src={product.imageURL} alt="" className="h-96" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
