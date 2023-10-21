import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AddProduct = () => {
  const addProductHandle = (event) => {
    event.preventDefault();

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

    console.log(productInfo);

    fetch(
      "https://riajulpro-assingment-10-hvg430qx7-riajul-pros-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire(
          "You have successfully added!",
          "You can add more movies.",
          "success"
        );
        console.log(data);
      });

    form.reset();
  };
  return (
    <div>
      <Helmet>
        <title>Add Products now</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row md:w-9/12 mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Product!</h1>
            <p className="py-6">
              You should add all the information to save it into the database.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={addProductHandle}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="enter image url"
                  name="imageURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Movies Name</span>
                </label>
                <input
                  type="text"
                  placeholder="movies name"
                  name="productName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  placeholder="enter brand name"
                  name="brandName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Movies Type</span>
                </label>
                <input
                  type="text"
                  placeholder="content type"
                  name="type"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Movies Price</span>
                </label>
                <input
                  type="text"
                  placeholder="$ price"
                  name="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  placeholder="short description"
                  name="description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="rating out of 10"
                  name="rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
