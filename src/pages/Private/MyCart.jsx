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
        <div className="overflow-x-auto">
          {myNewCart.length === 0 ? (
            <div className="flex flex-col justify-center items-center">
              <RiMovie2Line className="text-9xl" />
              <div>There is no movies on the cart.</div>
            </div>
          ) : (
            myNewCart.map((cart) => (
              <div key={cart._id}>
                <div></div>
                <div>{cart.productName}</div>
                <div>{cart.rating}</div>
                <div>${cart.price}</div>
                <div>
                  <button
                    className="btn btn-success rounded-none"
                    onClick={() => deleteAnItem(cart._id)}
                  >
                    Delete
                  </button>
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
