// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Features = () => {
  const [products, setProducts] = useState([]);

  const topRated = products.filter((product) => product.rating >= 7);

  useEffect(() => {
    fetch("https://movieshub-server-rp.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="">
      <Swiper
        slidesPerView={2}
        spaceBetween={12}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {topRated.map((product) => (
          <SwiperSlide key={product._id}>
            <Link to={`/product_details/${product._id}`}>
              <img
                src={product.imageURL}
                alt=""
                className="h-52 w-full object-cover object-bottom"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;
