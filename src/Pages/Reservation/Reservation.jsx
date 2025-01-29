import { FaBookOpen } from "react-icons/fa6";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";

const Reservation = () => {
  const handleReservation = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const time = form.time.value;
    const guest = form.guest.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(date, name, time, guest, email, phone);
  };
  return (
    <div>
      <div className="my-10">
        <SectionTitle subheading={"Reservation"} heading={"Book A Table"} />
      </div>
      <div className="bg-white md:p-10 p-5 mb-10 rounded">
        <form onSubmit={handleReservation}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg font-semibold">Date*</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                name="date"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg font-semibold">Time*</span>
              </div>
              <input
                type="time"
                placeholder="Type here"
                name="time"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Total Guest*
                </span>
              </div>
              <input
                type="text"
                name="guest"
                placeholder="Number of guest"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg font-semibold">Name*</span>
              </div>
              <input
                type="text"
                placeholder="Type your name"
                name="name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg font-semibold">Phone*</span>
              </div>
              <input
                type="text"
                placeholder="Type phone number"
                name="phone"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg font-semibold">Email*</span>
              </div>
              <input
                type="email"
                placeholder="example@gmail.com"
                name="email"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="px-5 py-3 rounded text-white font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center gap-2 "
            >
              {" "}
              Book A Table <FaBookOpen />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
