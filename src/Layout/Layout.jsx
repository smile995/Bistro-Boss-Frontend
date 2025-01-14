import Navbar from "../SharedComponents/Navbar";
import Footer from "../SharedComponents/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const pathname =
    location.pathname == "/signin" || location.pathname == "/signup";

  return (
    <div className="max-w-screen-xl mx-auto ">
      {pathname ? "" : <Navbar />}
      <Outlet />
      {pathname ? "" : <Footer />}
    </div>
  );
};

export default Layout;
