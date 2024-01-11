import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { RiMovie2Line } from "react-icons/ri";

const MyCart = () => {
  const [myCart, setMyCart] = useState([]);
  const [myNewCart, setMyNewCart] = useState([]);
  const { user } = useContext(AuthProvider);

  useEffect(() => {
    fetch("https://movieshub-server-rp.vercel.app/myCart")
      .then((res) => res.json())
      .then((data) => {
        const currentData = data.filter(
          (now) => now?.userEmail === user?.email
        );
        setMyCart(currentData);
      });
  }, [user]);

  useEffect(() => {
    setMyNewCart(myCart);
  }, [myCart]);

  const deleteAnItem = (itemId) => {
    fetch(`https://movieshub-server-rp.vercel.app/my_cart/${itemId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filterData = myCart.filter((cart) => cart._id !== itemId);
        setMyNewCart(filterData);
        Swal.fire(
          "You have successfully deleted!",
          "The item has been deleted from the cart",
          "success"
        );
      });
  };

  return (
    <>
      <Helmet>
        <title>Your data on cart</title>
      </Helmet>
      <div className="w-full lg:w-10/12 mx-auto my-5">
        <div className="grid grid-cols-5 gap-3">
          {myNewCart.length === 0 ? (
            <div className="flex flex-col justify-center items-center">
              <RiMovie2Line className="text-9xl" />
              <div>There is no movies on the cart.</div>
            </div>
          ) : (
            myNewCart.map((cart) => (
              <div key={cart._id} className="flex gap-1">
                <div className="flex-1">
                  <img
                    src={cart.imageURL}
                    alt=""
                    className="h-36 w-24 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p>{cart.productName}</p>
                  <p>{cart.rating}</p>
                  <p>${cart.price}</p>
                  <p>
                    <button
                      className="btn btn-success rounded-none"
                      onClick={() => deleteAnItem(cart._id)}
                    >
                      Delete
                    </button>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MyCart;
