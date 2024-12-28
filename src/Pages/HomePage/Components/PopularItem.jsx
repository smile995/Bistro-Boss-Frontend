import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import ItemViewer from "../../../SharedComponents/ItemViewer/ItemViewer";
import useManu from "../../../Hooks/useManu";
import { Link } from "react-router-dom";

const PopularItem = () => {
  const [manus]= useManu();
  const popularData = manus?.filter((item) => item.category === "popular");
  return (
    <div className="space-y-5 mb-4">
      <SectionTitle subheading="Check it out" heading="from our manu" />
      <div className=" grid md:grid-cols-2 gap-5 p-3">
        {popularData.map((manu) => (
          <ItemViewer key={manu._id} manu={manu} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={'our-manu'}>
        <button className="px-5  py-3 font-semibold border-b-black  border-b-4 rounded-lg hover:text-[#BB8506] shadow-xl ">
          View Full Menu
        </button></Link>
      </div>
    </div>
  );
};

export default PopularItem;
