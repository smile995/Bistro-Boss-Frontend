import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import { FaTrash } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });

  return (
    <div>
      <div>
        <SectionTitle heading={"Manage All Users"} subheading={"How Many?"} />
      </div>
      <div className="md:w-5/6 mx-auto bg-white rounded p-2 md:p-10">
        <div className="flex justify-between items-center">
          <h3 className="md:text-2xl font-bold">All Users </h3>
          <h3 className="md:text-2xl font-bold">
            Total Users: {users?.length}{" "}
          </h3>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th>SR.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, inx) => (
                <tr key={user?._id}>
                  <th>{inx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="rounded p-2 bg-[#D1A054] text-white text-xl">
                      <FaUsers />
                    </button>
                  </td>
                  <td>
                    <button className="rounded p-2 bg-[#ba1c1c] text-white text-xl">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
