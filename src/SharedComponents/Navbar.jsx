import { Link, NavLink } from "react-router-dom";
import "./shared.css";
import useBistro from "../Hooks/useBistro";
import { ToastContainer, toast } from "react-toastify";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../Hooks/useCart";
const Navbar = () => {
  const { user, userSignOut } = useBistro();
  const [data] = useCart();
 
  

  const notify = () => toast("You are logged out");
  const handleLogOut = () => {
    userSignOut().then(() => {
      notify();
    });
  };
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>HOME</NavLink>
      </li>
      <li>
        <NavLink to={"/our-manu"}>OUR MANU</NavLink>
      </li>
      <li>
        <NavLink to={"/our-food"}>OUR FOOD</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>CONTACT</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black fixed md:text-white max-w-screen-xl bg-opacity-40 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <Link to={"/"}>
          <div>
            <p className="md:text-2xl text-white uppercase font-bold">
              Bistro Boss
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn mr-2">
          <FaCartShopping className="text-2xl" />
          <div className="badge badge-secondary hidden sm:block">
            +{data?.length}
          </div>
        </button>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-[#DC3545]  text-white border-0 hover:bg-[#C82333] "
          >
            SIGN OUT
          </button>
        ) : (
          <button className="btn bg-[#007BFF] hover:bg-[#0056b3] text-white border-0">
            <Link to={"/signin"}>SIGN IN</Link>
          </button>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
