import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthProvider } from "../../context/AuthContext";

const Login = () => {
  const navigateTo = useNavigate();

  const location = useLocation();

  const { loginWithGoogle, loginWithGithub, signAccount } =
    useContext(AuthProvider);

  const googleLogin = () => {
    loginWithGoogle()
      .then(() => {
        return (
          Swal.fire(
            "You have successfully login!",
            "Now you can access all features.",
            "success"
          ),
          navigateTo(location?.state ? location.state : "/")
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const githubLogin = () => {
    loginWithGithub()
      .then(() => {
        Swal.fire(
          "You have successfully login!",
          "Now you can access all features.",
          "success"
        );
        navigateTo(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const loginFormSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    signAccount(email, password)
      .then(() => {
        Swal.fire(
          "You have successfully login!",
          "Now you can access all features.",
          "success"
        );
        navigateTo(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire(
          "User or Password Wrong!",
          "Please use correct user and password",
          "error"
        );
        console.log(error);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse md:w-3/4 md:mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              You can access all of our features if you are a login user. For
              having all of our services login first. If you have not any
              account so register now.
            </p>
            <Link to={"/"} className="btn btn-primary">
              Home
            </Link>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={loginFormSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <input type="checkbox" name="" id="" /> Remember me
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p>Or Sign In Using</p>
                <div className="flex items-center justify-center gap-2 my-3">
                  <button onClick={googleLogin} className="btn btn-accent">
                    Google
                  </button>
                  <button onClick={githubLogin} className="btn btn-accent">
                    GitHub
                  </button>
                </div>
              </div>
              <div className="text-center">
                Do not have an account? <Link to={"/register"}>Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
