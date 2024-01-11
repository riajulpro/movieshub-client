import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ViewDetails = () => {
  const id = useParams();

  const { user } = useContext(AuthProvider);

  const data = useLoaderData();

  const {
    _id,
    imageURL,
    productName,
    brandName,
    type,
    price,
    description,
    rating,
  } = data;

  const dataToSend = {
    imageURL,
    productName,
    brandName,
    type,
    price,
    description,
    rating,
  };

  const cartData = Object.assign(dataToSend, { userEmail: user?.email });

  console.log(cartData, id, user);

  const addToCart = () => {
    fetch("https://movieshub-server-rp.vercel.app/myCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire(
          "You have successfully added to the cart!",
          "Check in the cart",
          "success"
        );
        console.log(data);
      });
  };

  return (
    <div>
      <Helmet>
        <title>You are watching the data information</title>
      </Helmet>
      <div className="bg-slate-800 w-11/12 lg:w-10/12 mx-auto my-3 flex lg:flex-row flex-col gap-3">
        <figure className="flex-2">
          <img src={imageURL} alt="Movie" className="md:h-[80vh] w-full" />
        </figure>
        <div className="relative flex-1 p-3 md:py-5 md:pr-5">
          <h2 className="text-4xl font-bold">{productName}</h2>
          <div className="">
            <p>
              <span className="font-bold">Type:</span> {type}
            </p>
            <p>
              <span className="font-bold">Brand Name:</span> {brandName}
            </p>
            <p>
              <span className="font-bold">Price:</span> ${price}
            </p>
            <p>
              <span className="font-bold">Rating:</span> {rating}/10
            </p>
            <p>
              <span className="font-bold">Description:</span> {description}
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:absolute right-10 bottom-8">
            <Link to={`/update_product/${_id}`}>
              <button className="bg-slate-950 hover:bg-slate-900 px-4 py-2 rounded-md mr-2">
                Update
              </button>
            </Link>
            <button
              className="bg-slate-950 hover:bg-slate-900 px-4 py-2 rounded-md"
              onClick={addToCart}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
