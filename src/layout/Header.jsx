import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../assets/icons/logo.svg";
import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";

const Header = () => {
  const { user, logoutAccount } = useContext(AuthProvider);

  console.log(user);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/add_product"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/my_cart"}>My Cart</NavLink>
      </li>
    </>
  );

  const loggedUserData = (
    <>
      <div>{user?.displayName}</div>
      <div>
        <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full" />
      </div>
      <div>
        <Link
          onClick={() => logoutAccount()}
          className="btn bg-primary rounded-none text-white"
        >
          Logout
        </Link>
      </div>
    </>
  );

  const unLoggedUser = (
    <>
      <div>
        <Link to={"/login"} className="btn bg-primary rounded-none text-white">
          Login
        </Link>
      </div>
      <div>
        <Link
          to={"/register"}
          className="btn bg-secondary rounded-none text-white"
        >
          Register
        </Link>
      </div>
    </>
  );

  return (
    <header>
      <div className="navbar bg-base-100 md:w-9/12 md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="font-bold text-xl flex items-center">
            <img src={LogoIcon} alt="" className="w-6 h-6" />
            <div>
              Movies<span className="text-red-400">Hub</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end hidden lg:flex lg:items-center gap-1">
          {user ? loggedUserData : unLoggedUser}
        </div>
      </div>
    </header>
  );
};

export default Header;
