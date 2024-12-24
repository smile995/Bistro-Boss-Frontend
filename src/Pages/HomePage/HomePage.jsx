import OrderOnline from "./Components/OrderOnline";
import PopularItem from "./Components/PopularItem";
import Slider from "./Components/Slider";

export const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <OrderOnline></OrderOnline>
      <PopularItem></PopularItem>
    </div>
  );
};
