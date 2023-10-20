// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const MostViewed = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="md:w-9/12 mx-auto my-5">
        <h1 className="text-3xl mb-3 font-bold">Most Viewed Movies</h1>
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
    </div>
  );
};

export default MostViewed;
