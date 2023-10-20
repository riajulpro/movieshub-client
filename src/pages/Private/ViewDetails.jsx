import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const id = useParams();
  const currentProduct = useLoaderData();

  console.log(id);

  return (
    <div>
      {currentProduct.map((product) => (
        <div key={product._id} className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={product.imageURL} alt="Movie" className="h-56" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.productName}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewDetails;
