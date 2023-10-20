import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const id = useParams();
  const data = useLoaderData();

  const { imageURL, productName, brandName, type, price, description, rating } =
    data;

  console.log(id, data);

  const updateProductHandle = (event) => {
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

    fetch(
      `https://riajulpro-assingment-10-lae88il3n-riajul-pros-projects.vercel.app/products/${data._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire(
          "You have successfully updated!",
          "Check the details",
          "success"
        );
        console.log(data);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row md:w-9/12 mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Product!</h1>
            <p className="py-6">Change the value what you need to change.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={updateProductHandle}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="enter image url"
                  name="imageURL"
                  defaultValue={imageURL}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="product name"
                  name="productName"
                  defaultValue={productName}
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
                  defaultValue={brandName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Type</span>
                </label>
                <input
                  type="text"
                  placeholder="product type"
                  name="type"
                  defaultValue={type}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  type="text"
                  placeholder="$ price"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="textarea"
                  placeholder="short description"
                  name="description"
                  defaultValue={description}
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
                  defaultValue={rating}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
