import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useBistro from "../../Hooks/useBistro";
import { FaBookOpen, FaMoneyBill, FaUtensils } from "react-icons/fa6";

const UserHome = () => {
  const { user } = useBistro();
  const axiosSecure = useAxiosSecure();
  const [reviews, setReviews] = useState(0);
  const [orders, setOrder] = useState(0);
  const [foods, setFood] = useState(0);
  axiosSecure.get(`/user-state/${user?.email}`).then((res) => {
    setFood(res?.data?.menus);
    setReviews(res?.data?.reviews);
    setOrder(res?.data?.orders);
  });

  return (
    <div className="max-h-screen">
      <h2 className="text-3xl font-bold">
        <span> Hi, Welcome</span> {user ? user?.displayName : "Back !"}{" "}
      </h2>
      <div>
        <div className="stats shadow w-full my-10">
          <div className="stat bg-gradient-to-l from-[#FCDBFF] to-[#BB34F5]">
            <div className="stat-figure text-secondary">
              <FaUtensils className="text-4xl" />
            </div>
            <div className="stat-title">Menus</div>
            <div className="stat-value">{foods ? foods : 0}</div>
          </div>

          <div className="stat bg-gradient-to-l from-[#FDE8C0] to-[#D3A256] ">
            <div className="stat-figure text-secondary">
              <FaBookOpen className="text-4xl" />
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{orders ? orders : 0}</div>
          </div>

          <div className="stat bg-gradient-to-l from-[#FECDE9] to-[#FE4880] ">
            <div className="stat-figure text-secondary">
              <FaMoneyBill className="text-4xl" />
            </div>
            <div className="stat-title">Payments</div>
            <div className="stat-value">{orders ? orders : 0}</div>
          </div>
        </div>
      </div>
      <div className="md:flex w-full rounded">
        <div className="md:w-1/2 w-full md:p-10 p-5 bg-red-500 flex items-center justify-center border-r-4 border-[#D3A256]">
          <div>
            <div className="avatar">
              <div className="mask mask-hexagon md:w-64 w-32">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl text-center">{user?.displayName}</h2>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:p-10 p-5 bg-[#FEF9C3] flex items-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold text-center">
              Your Activeites
            </h1>
            <h3 className="text-2xl font-semibold text-[#0088FE]">
              Orders: {orders}
            </h3>
            <h3 className="text-2xl font-semibold text-[#00C4A1]">
              Reviews: {reviews}
            </h3>
            <h3 className="text-2xl font-semibold text-[#FF8042]">
              Payments: {orders}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
