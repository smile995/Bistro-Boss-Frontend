import { FaClock, FaLocationDot, FaPaperPlane, FaPhoneVolume } from "react-icons/fa6";
import ItemCover from "../../SharedComponents/ItemCover/ItemCover";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import cover from "../../assets/contact/banner.jpg";

const Contact = () => {
  return (
    <div>
      <div>
        <ItemCover
          img={cover}
          title="Contact"
          tag="Contact us if you feel free"
        />
      </div>

      <div className="my-10">
        <SectionTitle subheading={"Visit Us"} heading={"our loaction"} />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8  my-5">
        <div className=" border-2 rounded-sm">
          <div className="py-4 bg-[#D1A054] ">
            <FaPhoneVolume className="text-white text-2xl mx-auto" />
          </div>
          <div className="bg-[#f2f2f2] py-5 md:py-10 ml-5 mb-5 mr-5  space-y-2 text-center">
            <h3 className="text-xl font-semibold">PHONE</h3>
            <p className="text-[#454545]">+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className=" border-2 rounded-sm">
          <div className="py-4 bg-[#D1A054] ">
            <FaLocationDot className="text-white text-2xl mx-auto" />
          </div>
          <div className="bg-[#f2f2f2] py-5 md:py-10 ml-5 mb-5 mr-5  space-y-2 text-center">
            <h3 className="text-xl font-semibold">ADDRESS</h3>
            <p className="text-[#454545]">
              Banani Supermarket, Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <div className=" border-2 rounded-sm">
          <div className="py-4 bg-[#D1A054] ">
            <FaClock className="text-white text-2xl mx-auto" />
          </div>
          <div className="bg-[#f2f2f2] py-5 md:py-10 ml-5 mb-5 mr-5  space-y-2 text-center">
            <h3 className="text-xl font-semibold">WORKING HOURS</h3>
            <p className="text-[#454545]">Mon - Fri: 08:00 - 22:00</p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <SectionTitle
          subheading={"Send Us a Message"}
          heading={"CONTACT FORM"}
        />
      </div>
      <div className="bg-[#f2f2f2] md:p-10 p-5 mb-10 rounded">
        <form>
          <div className="md:flex justify-between gap-10">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                placeholder="Example@gmail.com"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone*</span>
            </label>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="input input-bordered"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Message*</span>
            </label>
            <textarea className="w-full input input-bordered min-h-36"></textarea>
          </div>
          <div>
            React capcha will be come here
          </div>
          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="px-5 py-3 rounded text-white font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center gap-2 "
            > Send Message <FaPaperPlane/> </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
