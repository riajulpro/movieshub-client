import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { RiMovie2Line } from "react-icons/ri";
import { IoMdStarHalf } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { LuDot } from "react-icons/lu";

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
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
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Your data on cart</title>
      </Helmet>
      <div className="w-full lg:w-10/12 mx-auto my-5">
        <div className="grid grid-cols-4 gap-3">
          {myNewCart.length === 0 ? (
            <div className="flex flex-col justify-center items-center">
              <RiMovie2Line className="text-9xl" />
              <div>There is no movies on the cart.</div>
            </div>
          ) : (
            myNewCart.map((cart) => (
              <div key={cart._id} className="bg-slate-700 flex gap-1">
                <div className="flex-1">
                  <img
                    src={cart.imageURL}
                    alt=""
                    className="h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-2 flex flex-col justify-between text-sm">
                  <p className="font-bold">{cart.productName}</p>
                  <div className="mt-auto flex items-center">
                    <p className="flex items-center">
                      <IoMdStarHalf />
                      {cart.rating}
                    </p>
                    <LuDot className="text-xl" />
                    <p>${cart.price}</p>
                  </div>
                  <MdDelete
                    className="text-xl self-end hover:text-red-400 cursor-pointer hover:bg-slate-950 rounded-full"
                    onClick={() => deleteAnItem(cart._id)}
                  />
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
