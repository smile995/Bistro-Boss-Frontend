import { FaClock, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
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
            <p className="text-[#454545]">Banani Supermarket, Dhaka, Bangladesh</p>
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
        <SectionTitle subheading={"Send Us a Message"} heading={"CONTACT FORM"}/>
      </div>

    </div>
  );
};

export default Contact;
