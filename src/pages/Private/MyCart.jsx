import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import Swal from "sweetalert2";

const MyCart = () => {
  const [myCart, setMyCart] = useState([]);
  const { user } = useContext(AuthProvider);

  useEffect(() => {
    fetch(
      "https://riajulpro-assingment-10-lae88il3n-riajul-pros-projects.vercel.app/myCart"
    )
      .then((res) => res.json())
      .then((data) => {
        const currentData = data.filter(
          (now) => now?.userEmail === user?.email
        );
        setMyCart(currentData);
      });
  }, [user]);

  const [myNewCart, setMyNewCart] = useState([]);

  useEffect(() => {
    setMyNewCart(myCart);
  }, [myCart]);

  console.log(myNewCart, myCart);

  const deleteAnItem = (itemId) => {
    fetch(
      `https://riajulpro-assingment-10-lae88il3n-riajul-pros-projects.vercel.app/my_cart/${itemId}`,
      {
        method: "DELETE",
      }
    )
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
    <div className="w-11/12 md:w-9/12 mx-auto my-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myNewCart.length === 0 ? (
              <tr className="text-center">
                <td colSpan={"8"}>There is no data on the cart.</td>
              </tr>
            ) : (
              myCart.map((cart) => (
                <tr key={cart._id}>
                  <th></th>
                  <td>{cart.productName}</td>
                  <td>{cart.rating}</td>
                  <td>${cart.price}</td>
                  <td>
                    <button
                      className="btn btn-success rounded-none"
                      onClick={() => deleteAnItem(cart._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
