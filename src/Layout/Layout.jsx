import Navbar from "../SharedComponents/Navbar";
import Footer from "../SharedComponents/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
