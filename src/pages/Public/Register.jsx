import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const navigateTo = useNavigate();

  const { createAccount } = useContext(AuthProvider);

  const registerHandle = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const username = form.get("username");
    const picture = form.get("picture");
    const email = form.get("email");
    const password = form.get("password");

    if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      createAccount(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: username,
            photoURL: picture,
          })
            .then(() => {
              Swal.fire(
                "You have successfully register!",
                "Please login now!",
                "success"
              );
              navigateTo("/login");
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      Swal.fire(
        "Full-Fill the requirements of the password!",
        "Your password must have 6 characters include a capital and a special symbol",
        "error"
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Create an account</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse md:w-3/4 md:mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
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
            <form className="card-body" onSubmit={registerHandle}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  name="username"
                  defaultValue={""}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  type="text"
                  placeholder="enter picture url"
                  name="picture"
                  defaultValue={""}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  defaultValue={""}
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
                  defaultValue={""}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="text-center">
                Already have an account? <Link to={"/login"}>Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
