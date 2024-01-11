import { useState } from "react";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie-player";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import WaitingAnim from "../../assets/animation/loadingAnim.json";

const UpdateProduct = () => {
  const [waiting, setWaiting] = useState(false);

  const data = useLoaderData();

  const { imageURL, productName, brandName, type, price, description, rating } =
    data;

  const updateProductHandle = (event) => {
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

    fetch(`https://movieshub-server-rp.vercel.app/products/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire(
          "You have successfully updated!",
          "Check the details",
          "success"
        );
        console.log(data);
        setWaiting(false);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Update the data of {productName}</title>
      </Helmet>
      <div className="lg:w-10/12 mx-auto my-3">
        <div className="bg-slate-800 p-10 rounded-md">
          <div className="text-center mb-5">
            <h1 className="text-5xl font-bold">Update the Product!</h1>
            <p className="">
              You should add all the information to save it into the database.
            </p>
          </div>
          <div className="">
            <form
              className="grid grid-cols-1 lg:grid-cols-2 gap-3"
              onSubmit={updateProductHandle}
            >
              <div className="">
                <label className="">
                  <span className="">Thumbnail</span>
                </label>
                <input
                  type="text"
                  defaultValue={imageURL}
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
                  defaultValue={productName}
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
                  defaultValue={brandName}
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
                  defaultValue={type}
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
                  defaultValue={price}
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
                  defaultValue={rating}
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
                  defaultValue={description}
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
                    Update Product
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

export default UpdateProduct;
