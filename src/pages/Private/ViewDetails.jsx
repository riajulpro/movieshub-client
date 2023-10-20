import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import Swal from "sweetalert2";

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
    fetch("http://localhost:5000/myCart", {
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
      <div
        key={_id}
        className="card lg:card-side bg-base-100 shadow-xl my-5 w-11/12 md:w-9/12 mx-auto"
      >
        <figure className="flex-1">
          <img src={imageURL} alt="Movie" className="" />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title">{productName}</h2>
          <div className="mb-auto">
            <p>Type: {type}</p>
            <p>Brand Name: {brandName}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating}/10</p>
            <p>Description: {description}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
