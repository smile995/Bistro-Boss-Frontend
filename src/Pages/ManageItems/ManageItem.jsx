import { FaTrash } from "react-icons/fa6";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import useManu from "../../Hooks/useManu";
import { FaEdit } from "react-icons/fa";

const ManageItem = () => {
  const [menus, refetch] = useManu();
  return (
    <div>
      <div>
        <SectionTitle heading="Manage all items" subheading="Hurry Up" />
      </div>
      <div className="md:w-5/6 mx-auto bg-white rounded p-2 md:p-10">
        <div>
          <h3 className="md:text-2xl font-bold">Total Items:  {menus.length}</h3>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th>SR.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menus?.map((menu, inx) => (
                <tr key={menu._id}>
                  <th>{inx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={menu.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{menu.name}</td>
                  <td>{menu.price}</td>

                  <td>
                    <button className="rounded p-2 bg-[#D1A054] text-white text-xl">
                      <FaEdit />
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

export default ManageItem;
