import { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";

const MoviesList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://movieshub-server-rp.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  const pixarProducts = products?.filter((p) => p.brandName === "Pixar");
  const disneyProducts = products?.filter((p) => p.brandName === "Disney");
  const dreamWorksProducts = products?.filter(
    (p) => p.brandName === "DreamWorks"
  );
  const warnerBrosProducts = products?.filter(
    (p) => p.brandName === "Warner Bros"
  );
  const sonyPicturesProducts = products?.filter(
    (p) => p.brandName === "Sony Pictures"
  );

  console.log(dreamWorksProducts);

  return (
    <div>
      <SingleCategory categoryName="Pixar Movies" products={pixarProducts} />
      <SingleCategory categoryName="Disney Movies" products={disneyProducts} />
      <SingleCategory
        categoryName="DreamWorks Movies"
        products={dreamWorksProducts}
      />
      <SingleCategory
        categoryName="Sony Pictures Movies"
        products={sonyPicturesProducts}
      />
      <SingleCategory
        categoryName="Warner Bros Movies"
        products={warnerBrosProducts}
      />
    </div>
  );
};

export default MoviesList;
