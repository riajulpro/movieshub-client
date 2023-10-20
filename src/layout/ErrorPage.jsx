import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl text-center">404!</h1>
      <p>You have entered in a wrong page.</p>
      <Link to={"/"} className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
