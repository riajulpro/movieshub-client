import { Link } from "react-router-dom";

const Register = () => {
  const registerHandle = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    const user = {
      username,
      email,
      password,
    };

    console.log(user);

    form.reset();
  };
  return (
    <>
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
                <button className="btn btn-primary">Login</button>
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
