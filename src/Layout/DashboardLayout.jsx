import { FaBookOpen } from "react-icons/fa";
import {
  FaBagShopping,
  FaCalendarCheck,
  FaCalendarDays,
  FaCartShopping,
  FaCommentMedical,
  FaCreditCard,
  FaEnvelope,
  FaHouse,
  FaList,
  FaListUl,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
// import useBistro from "../Hooks/useBistro";

const DashboardLayout = () => {
  // const { user } = useBistro();
 
  
  const [isAdmin] = useAdmin();
  return (
    <div className="flex min-h-screen max-w-screen-xl mx-auto">
      <div className="w-1/5 md:px-5 px-2 md:py-8 py-4 bg-[#D1A054] ">
        <div className="mb-10">
          <h2 className="font-bold text-3xl">BISTRO BOSS</h2>
          <h2 className="text-2xl tracking-widest">RESTAURANT</h2>
        </div>

        <div>
          <ul>
            {isAdmin ? (
              <>
                <li className="text-xl  mb-2 ">
                  <NavLink to={"/dashboard/admin-home"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaHouse className="text-2xl" /> Admin Home
                    </button>
                  </NavLink>
                </li>
                <li className="text-xl  mb-2">
                  <NavLink to={"/dashboard/admin/add-items"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaUtensils className="text-2xl" /> Add Items
                    </button>
                  </NavLink>
                </li>
                <li className="text-xl  mb-2">
                  <NavLink to={"/dashboard/admin/manage-items"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaList className="text-2xl" /> Manage Items
                    </button>
                  </NavLink>
                </li>
                <li className="text-xl  mb-2">
                  <NavLink to={"/dashboard/admin/manage-bookings"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaBookOpen className="text-2xl" /> Manage Booking
                    </button>
                  </NavLink>
                </li>
                <li className="text-xl  mb-2">
                  <NavLink to={"/dashboard/admin/all-users"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaUsers className="text-2xl" /> All Users
                    </button>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="text-xl  mb-2 ">
                  <NavLink to={"/dashboard/user-home"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaHouse className="text-2xl" /> User Home
                    </button>
                  </NavLink>
                </li>
                <li className="text-xl  mb-2">
                  <NavLink to={"/dashboard/reservation"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaCalendarDays className="text-2xl" /> Reservation
                    </button>
                  </NavLink>
                </li>
                <li className="text-xl  mb-2">
                  <NavLink to={"/dashboard/payment-history"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaCreditCard className="text-2xl" /> Payment History
                    </button>
                  </NavLink>
                </li>
                <li className="text-xl  mb-2">
                  <NavLink to={"/dashboard/my-cart"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaCartShopping className="text-2xl" /> My Cart
                    </button>
                  </NavLink>
                </li>
                <li className="text-xl  mb-2">
                  <NavLink to={"/dashboard/add-review"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaCommentMedical className="text-2xl" /> Add Review
                    </button>
                  </NavLink>
                </li>
                <li className="text-xl  mb-2">
                  <NavLink to={"/dashboard/my-booking"}>
                    <button className="flex items-center md:gap-3 gap-1">
                      <FaCalendarCheck className="text-2xl" /> My Booking
                    </button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="divider divider-success"></div>
        <div>
          <ul>
            <li className="text-xl  mb-2 ">
              <NavLink to={"/"}>
                <button className="flex items-center md:gap-3 gap-1">
                  <FaHouse className="text-2xl" /> Home
                </button>
              </NavLink>
            </li>
            <li className="text-xl  mb-2 ">
              <NavLink to={"/our-manu"}>
                <button className="flex items-center md:gap-3 gap-1">
                  <FaListUl className="text-2xl" /> Manu
                </button>
              </NavLink>
            </li>
            <li className="text-xl  mb-2 ">
              <NavLink to={"/our-food"}>
                <button className="flex items-center md:gap-3 gap-1">
                  <FaBagShopping className="text-2xl" /> Shop
                </button>
              </NavLink>
            </li>
            <li className="text-xl  mb-2 ">
              <NavLink to={"/contact"}>
                <button className="flex items-center md:gap-3 gap-1">
                  <FaEnvelope className="text-2xl" /> Contact
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 md:px-5 px-2 md:py-8 py-4 bg-[#f5f5f5]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
