// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [products, setProducts] = useState([]);

  const topRated = products.filter((product) => product.rating >= 7);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="w-11/12 md:w-9/12 mx-auto my-5 md:my-10">
        <h1 className="text-3xl mb-3 font-bold">Top Rated Movies</h1>
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
          {topRated.map((product) => (
            <SwiperSlide key={product._id}>
              <Link to={`/product_details/${product._id}`}>
                <img src={product.imageURL} alt="" className="md:h-96" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
