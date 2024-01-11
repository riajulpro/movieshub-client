import { useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import WaitingAnim from "../../assets/animation/loadingAnim.json";
import Lottie from "react-lottie-player";

const AddProduct = () => {
  const [waiting, setWaiting] = useState(false);

  const addProductHandle = (event) => {
    event.preventDefault();

    setWaiting(true);

    const form = event.target;
    const imageURL = form.imageURL.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const productInfo = {
      imageURL,
      productName,
      brandName,
      type,
      price,
      description,
      rating,
    };

    fetch("https://movieshub-server-rp.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire(
          "You have successfully added!",
          "You can add more movies.",
          "success"
        );
        console.log(data);
        setWaiting(false);
      });

    form.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Add Products now</title>
      </Helmet>
      <div className="lg:w-10/12 mx-auto my-3">
        <div className="bg-slate-800 p-10 rounded-md">
          <div className="text-center mb-5">
            <h1 className="text-5xl font-bold">Add Product!</h1>
            <p className="">
              You should add all the information to save it into the database.
            </p>
          </div>
          <div className="">
            <form
              className="grid grid-cols-1 lg:grid-cols-2 gap-3"
              onSubmit={addProductHandle}
            >
              <div className="">
                <label className="">
                  <span className="">Thumbnail</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter image url"
                  name="imageURL"
                  className="w-full p-2 rounded bg-slate-600 focus:bg-slate-700"
                  required
                />
              </div>
              <div className="form-control">
                <label className="">
                  <span className="">Movies Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Movies name"
                  name="productName"
                  className="w-full p-2 rounded bg-slate-600 focus:bg-slate-700"
                  required
                />
              </div>
              <div className="">
                <label className="">
                  <span className="">Brand Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter brand name"
                  name="brandName"
                  className="w-full p-2 rounded bg-slate-600 focus:bg-slate-700"
                  required
                />
              </div>
              <div className="">
                <label className="">
                  <span className="">Movies Type</span>
                </label>
                <input
                  type="text"
                  placeholder="Content type"
                  name="type"
                  className="w-full p-2 rounded bg-slate-600 focus:bg-slate-700"
                  required
                />
              </div>
              <div className="">
                <label className="">
                  <span className="">Movies Price</span>
                </label>
                <input
                  type="text"
                  placeholder="$ price"
                  name="price"
                  className="w-full p-2 rounded bg-slate-600 focus:bg-slate-700"
                  required
                />
              </div>
              <div className="">
                <label className="">
                  <span className="">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="Rating out of 10"
                  name="rating"
                  className="w-full p-2 rounded bg-slate-600 focus:bg-slate-700"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="">
                  <span className="">Short Description</span>
                </label>
                <textarea
                  rows="4"
                  type="text"
                  placeholder="Short description"
                  name="description"
                  className="w-full p-2 rounded bg-slate-600 focus:bg-slate-700"
                  required
                />
              </div>

              <div className="col-span-2">
                {waiting ? (
                  <button
                    className="disabled:bg-slate-700 px-10 rounded-md"
                    disabled
                  >
                    <Lottie
                      animationData={WaitingAnim}
                      className="h-14 w-14"
                      play
                      loop
                    />
                  </button>
                ) : (
                  <button className="bg-slate-950 hover:bg-slate-900 active:scale-95 py-3 px-4 rounded-md">
                    Add Product
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
