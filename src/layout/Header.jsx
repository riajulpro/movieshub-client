import LogoIcon from "../assets/icons/logo.svg";
import { useContext, useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const [searchBtn, setSearchBtn] = useState(false);
  const { user, logoutAccount } = useContext(AuthProvider);
  const { pathname } = useLocation();

  const links = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Categories",
      pathname: "/categories",
    },
    {
      route: "Genres",
      pathname: "/genres",
    },
    {
      route: "Recent",
      pathname: "/recent",
    },
  ];

  const searchNow = (e) => {
    e.preventDefault();

    console.log("submitted", e.target.searchInput.value);
  };

  return (
    <header className="bg-slate-800 shadow-md sticky top-0">
      <div className="w-full lg:w-10/12 mx-auto flex justify-between items-center gap-5">
        <div className="md:bg-slate-600 p-3 md:p-5 flex items-center gap-1 md:gap-2">
          <img src={LogoIcon} alt="logo" className="h-3 w-3 md:h-6 md:w-6" />
          <p className="font-bold md:font-extrabold text-xs md:text-base">
            <span>Movies</span>
            <span className="text-red-500">Hub</span>
          </p>
        </div>
        <nav className="hidden md:flex gap-10 items-center mr-auto text-sm">
          {links.map((link) => (
            <Link
              className={`${
                pathname === link.pathname && "text-red-500 font-bold"
              } hover:text-red-500 duration-150`}
              key={link.route}
              to={link.pathname}
            >
              {link.route}
            </Link>
          ))}
        </nav>
        <div className={`flex items-center gap-2`}>
          <Link
            to={"/login"}
            className={`${
              searchBtn ? "hidden md:block" : "block"
            } text-xs md:text-sm text-red-500 hover:text-red-600 font-bold`}
          >
            Go Premium
          </Link>
          <form onSubmit={searchNow}>
            <input
              type="text"
              name="searchInput"
              className={`${
                searchBtn ? "w-32 md:w-48 px-2 rounded-full" : "w-0"
              } duration-300 bg-slate-600`}
            />
          </form>
          <button onClick={() => setSearchBtn(!searchBtn)}>
            <IoIosSearch className="text-lg mr-2" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
