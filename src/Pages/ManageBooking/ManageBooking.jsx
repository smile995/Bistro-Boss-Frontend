import { FaBolt, FaClover } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageBooking = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["Confirm_Booking"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tables");
      return res.data;
    },
  });
  const handleConfirmBooking = (id) => {
    Swal.fire({
      icon: "question",
      title: "What's your action about this order",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Confirm`,
      denyButtonText: `Denied`,
    }).then(async (result) => {
      if (result?.isConfirmed) {
        const res = await axiosSecure.patch(`/tables/${id}`, {
          status: "confirm",
        });
        if (res?.data?.modifiedCount) {
          refetch();
          Swal.fire("Order Confirm", "", "success");
        }
      } else if (result?.isDenied) {
        const res = await axiosSecure.patch(`/tables/${id}`, {
          status: "denied",
        });
        if (res?.data?.modifiedCount) {
          refetch();
          Swal.fire("Order Denied", "", "error");
        }
      }
    });
  };

  return (
    <div>
      <div>
        <SectionTitle
          heading={"My All Booking"}
          subheading={"Excellent Ambience?"}
        />
      </div>
      <div className="md:w-5/6 mx-auto bg-white rounded p-2 md:p-10">
        <div className="flex justify-between items-center">
          <h3 className="md:text-2xl font-bold">Booking Details</h3>
          <h3 className="md:text-2xl font-bold">Total Booked:</h3>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th>SR.</th>
                <th>Email</th>
                <th>Guests</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((book, inx) => (
                <tr key={book?._id}>
                  <th>{inx + 1}</th>
                  <td>{book.email}</td>
                  <td>{book.guest}</td>
                  <td>{book.date}</td>
                  <td>{book.time}</td>
                  <td>{book.status}</td>
                  <td>
                    <button
                      onClick={() => handleConfirmBooking(book?._id)}
                      className="btn btn-circle btn-outline"
                    >
                      <FaBolt className="text-2xl font-extrabold" />
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

export default ManageBooking;
