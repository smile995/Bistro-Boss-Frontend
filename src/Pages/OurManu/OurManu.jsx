import useManu from "../../Hooks/useManu";
import ItemCover from "../../SharedComponents/ItemCover/ItemCover";
import banner from "../../assets/menu/banner3.jpg";

const OurManu = () => {
  const [manus] = useManu();
  const pizzas = manus.filter((item) => item.category === "pizza");
  const salads = manus.filter((item) => item.category === "salad");
  const soups = manus.filter((item) => item.category === "soup");
  const desserts = manus.filter((item) => item.category === "dessert");
  const offereds = manus.filter((item) => item.category === "offered");
  return (
    <div>
      <ItemCover
        title={"Our Manu"}
        tag={"Would you like to try a dish?"}
        img={banner}
      ></ItemCover>
      <div></div>
    </div>
  );
};

export default OurManu;
