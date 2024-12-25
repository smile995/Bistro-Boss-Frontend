import { useEffect, useState } from "react";
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import ItemViewer from "../../../SharedComponents/ItemViewer/ItemViewer";

const PopularItem = () => {
  const [manus, setManus] = useState([]);
  useEffect(() => {
    fetch("manu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularData = data?.filter((item) => item.category === "popular");
        setManus(popularData);
      });
  }, []);
  return (
    <div className="space-y-5 mb-4">
      <SectionTitle subheading="Check it out" heading="from our manu" />
      <div className=" grid md:grid-cols-2 gap-5 p-3">
        {manus.map((manu) => (
          <ItemViewer key={manu._id} manu={manu} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-5  py-3 font-semibold border-b-black  border-b-4 rounded-lg hover:text-[#BB8506] shadow-xl ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularItem;
