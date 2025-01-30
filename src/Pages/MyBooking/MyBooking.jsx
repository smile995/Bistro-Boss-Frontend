import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useBistro from "../../Hooks/useBistro";
import { FaTrash } from "react-icons/fa6";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";

const MyBooking = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useBistro();
  const { data, refetch } = useQuery({
    queryKey: [`${user?.displayName}`, `${user?.email}`],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tables/${user?.email}`);
      return res?.data;
    },
  });

  const deleteBooking = (id) => {
    console.log(id);
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
          <h3 className="md:text-2xl font-bold">Your All Booking </h3>
          <h3 className="md:text-2xl font-bold">
            Total Booked: {data?.length}{" "}
          </h3>
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
                  <td>
                    {book.status === "confirm" ? (
                      <p className="text-green-600 font-bold">Confirm</p>
                    ) : (
                      book.status
                    )}
                  </td>
                  <td>
                    <button
                      disabled={book?.status === "confirm"}
                      onClick={() => deleteBooking(book?._id)}
                      className="rounded p-2 bg-[#ba1c1c] text-white text-xl"
                    >
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

export default MyBooking;
