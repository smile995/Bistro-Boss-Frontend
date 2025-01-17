import { FaTrash } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyCart = () => {
  const [data, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = data?.reduce((acc, item) => {
    return acc + item?.price;
  }, 0);
  const handleDeleteFromCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`carts/${id}`).then((res) => {
          if (res?.data?.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle subheading={"My Cart"} heading={"WANNA ADD MORE"} />
      <div className="md:w-5/6 mx-auto bg-white rounded p-2 md:p-10">
        <div className="flex justify-between items-center">
          <h3 className="md:text-2xl font-bold">Total Items: {data?.length}</h3>
          <h3 className="md:text-2xl font-bold">Total Price: $ {totalPrice}</h3>
          <button className="bg-[#D1A054] px-3 text-white py-2 rounded text-xl font-semibold">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th>
                  <label>SR</label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={item?._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item?.image} />
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.price}</td>
                  <th>
                    <button
                      onClick={() => handleDeleteFromCart(item?._id)}
                      className="rounded p-2 bg-[#ba1c1c] text-white text-xl"
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
