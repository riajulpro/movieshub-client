import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthProvider } from "../../context/AuthContext";
import { Helmet } from "react-helmet";
import axios from "axios";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaGithub, FaGoogle } from "react-icons/fa";

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
        // navigateTo(location?.state ? location.state : "/");
        // Access token

        const dataPayload = { email };

        axios
          .post("https://movieshub-server-rp.vercel.app/jwt", dataPayload, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
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
      <Helmet>
        <title>Login now</title>
      </Helmet>
      <div className="md:w-2/3 mx-auto h-screen flex justify-center items-center">
        <div className="flex justify-center gap-5">
          <div className="flex-1 text-center lg:text-left">
            <Link to={"/"} className="">
              <IoChevronBackCircle className="text-2xl" />
            </Link>
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              You can access all of our features if you are a login user. For
              having all of our services login first. If you have not any
              account so register now.
            </p>
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={googleLogin}
                  className="bg-white text-slate-950 px-3 py-2 rounded flex justify-center gap-2 items-center hover:text-red-400 w-full"
                >
                  <FaGoogle /> Continue with Google
                </button>
                <button
                  onClick={githubLogin}
                  className="bg-white text-slate-950 px-3 py-2 rounded flex justify-center gap-2 items-center hover:text-red-400 w-full"
                >
                  <FaGithub /> Continue with GitHub
                </button>
              </div>
            </div>
            <form className="" onSubmit={loginFormSubmit}>
              <div className="flex flex-col gap-1">
                <label className="">
                  <span className="text-sm font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="User email"
                  name="email"
                  className="p-2 bg-slate-600 focus:bg-slate-800 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="">
                  <span className="text-sm font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="p-2 bg-slate-600 focus:bg-slate-800 rounded-md"
                  required
                />
                <label className="">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="checked:bg-slate-400"
                  />{" "}
                  Remember me
                </label>
              </div>
              <div className="">
                <button className="bg-slate-700 hover:bg-slate-600 font-bold w-full p-2 rounded-md">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center">
              Do not have an account? <Link to={"/register"}>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
