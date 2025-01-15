import Navbar from "../SharedComponents/Navbar";
import Footer from "../SharedComponents/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import useBistro from "../Hooks/useBistro";

const Layout = () => {
  const { loading } = useBistro();
  console.log(loading);

  const location = useLocation();
  const pathname =
    location.pathname == "/signin" || location.pathname == "/signup";

  return (
    <div className="max-w-screen-xl mx-auto ">
      {pathname ? "" : <Navbar />}
      {loading ? (
        <div className="flex justify-center items-center h-[90vh]">
          <div>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
      {pathname ? "" : <Footer />}
    </div>
  );
};

export default Layout;
