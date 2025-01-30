import { FaBookOpen, FaMoneyBill, FaUtensils } from "react-icons/fa6";
import useBistro from "../../Hooks/useBistro";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";

const AdminHome = () => {
  const { user } = useBistro();
  console.log(user);

  const [foods, setFood] = useState(0);
  const [orders, setOrder] = useState(0);
  const [users, setUser] = useState(0);
  const axiosSecure = useAxiosSecure();
  axiosSecure.get("/admin-static").then((res) => {
    setFood(res.data.foods);
    setUser(res.data.users);
    setOrder(res.data.orders);
  });
  return (
    <div className="max-h-screen">
      <h2 className="text-3xl font-bold">
        <span> Hi, Welcome</span> {user ? user?.displayName : "Back !"}{" "}
      </h2>
      <div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full my-10">
          <div className="stat bg-gradient-to-l from-[#FCDBFF] to-[#BB34F5]">
            <div className="stat-figure text-secondary">
              <FaUtensils className="text-4xl" />
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">1110 $</div>
          </div>

          <div className="stat bg-gradient-to-l from-[#FDE8C0] to-[#D3A256] ">
            <div className="stat-figure text-secondary">
              <FaBookOpen className="text-4xl" />
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{orders}</div>
          </div>

          <div className="stat bg-gradient-to-l from-[#FECDE9] to-[#FE4880] ">
            <div className="stat-figure text-secondary">
              <FaMoneyBill className="text-4xl" />
            </div>
            <div className="stat-title">Users</div>
            <div className="stat-value">{users}</div>
          </div>
          <div className="stat bg-gradient-to-l from-[#B6F7FF] to-[#6AAEFF]">
            <div className="stat-figure text-secondary">
              <FaUtensils className="text-4xl" />
            </div>
            <div className="stat-title">Foods</div>
            <div className="stat-value">{foods}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="avatar ">
          <div className="ring-primary ring-offset-base-100 w-full md:w-72  rounded-full ring ring-offset-2">
            <img src={user?.photoURL} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
