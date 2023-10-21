import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-2">
      <img
        src="https://i.ibb.co/9tZffTR/Na-Nov-26-removebg-preview.png"
        alt=""
        className=""
      />
      <p>You have entered in a wrong path.</p>
      <Link to={"/"} className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
