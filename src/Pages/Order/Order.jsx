import useManu from "../../Hooks/useManu";
import ItemCover from "../../SharedComponents/ItemCover/ItemCover";
import cover from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Order = () => {
  const [manus] = useManu();
  const pizzas = manus?.filter((item) => item.category === "pizza");
  const salads = manus?.filter((item) => item.category === "salad");
  const soups = manus?.filter((item) => item.category === "soup");
  const desserts = manus?.filter((item) => item.category === "dessert");
  const drinks = manus?.filter((item) => item.category === "drinks");

  return (
    <div>
      <div>
        <ItemCover
          img={cover}
          title="Our Food"
          tag="would you like to try a dish"
        ></ItemCover>
      </div>
      <div className="my-10">
        <Tabs>
          <TabList>
            <Tab>Slads</Tab>
            <Tab>Desserts</Tab>
            <Tab>Soups</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
