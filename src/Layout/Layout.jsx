import Navbar from "../SharedComponents/Navbar";
import Footer from "../SharedComponents/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import useBistro from "../Hooks/useBistro";

const Layout = () => {
  const { loading } = useBistro();
  const location = useLocation();
  const pathname =location.pathname == "/signin" || location.pathname == "/signup";
// service:  service_zflzwg8
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
