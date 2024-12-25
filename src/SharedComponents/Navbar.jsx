import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/our-manu'}>Our Manu</Link>
      </li>
     

    
    </>
  );
  return (
    <div className="navbar bg-black fixed md:text-white max-w-screen-xl bg-opacity-60 z-20">
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
        <Link to={'/'}>
        <div>
          <p className="md:text-2xl text-white uppercase font-bold">Bistro Boss</p>
        </div>
        </Link>
    
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
