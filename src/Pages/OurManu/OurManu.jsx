import useManu from "../../Hooks/useManu";
import ItemCover from "../../SharedComponents/ItemCover/ItemCover";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import CategorizedFood from "./Components/CategorizedFood";
import banner from "../../assets/menu/banner3.jpg";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizza from "../../assets/menu/pizza-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";

const OurManu = () => {
  const [manus] = useManu();
  const pizzas = manus?.filter((item) => item.category === "pizza");
  const salads = manus?.filter((item) => item.category === "salad");
  const soups = manus?.filter((item) => item.category === "soup");
  const desserts = manus?.filter((item) => item.category === "dessert");
  const offereds = manus?.filter((item) => item.category === "offered");
  return (
    <div>
      <ItemCover
        title={"Our Manu"}
        tag={"Would you like to try a dish?"}
        img={banner}
      ></ItemCover>
      <div>
        <SectionTitle
          heading="Today's Offers"
          subheading="Don't Miss"
        ></SectionTitle>
        <CategorizedFood items={offereds}></CategorizedFood>
      </div>
      <div>
        <ItemCover
          img={dessert}
          title="desserts"
          descrition="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <CategorizedFood items={desserts} />
      </div>
      <div>
        <ItemCover
          img={pizza}
          title="pizzas"
          descrition="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <CategorizedFood items={pizzas} />
      </div>
      <div>
        <ItemCover
          img={salad}
          title="salads"
          descrition="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <CategorizedFood items={salads} />
      </div>
      <div>
        <ItemCover
          img={soup}
          title="soups"
          descrition="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <CategorizedFood items={soups} />
      </div>
    </div>
  );
};

export default OurManu;
