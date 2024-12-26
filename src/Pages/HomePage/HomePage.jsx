import BistroNotice from "./Components/BistroNotice";
import CallUs from "./Components/CallUs";
import FeaturedItem from "./Components/FeaturedItem";
import OrderOnline from "./Components/OrderOnline";
import PopularItem from "./Components/PopularItem";
import Recomandation from "./Components/Recomandation";
import Slider from "./Components/Slider";
import Testimonals from "./Components/Testimonals";

export const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <OrderOnline></OrderOnline>
      <BistroNotice></BistroNotice>
      <PopularItem></PopularItem>
      <CallUs></CallUs>
      <Recomandation></Recomandation>
      <FeaturedItem></FeaturedItem>
      <Testimonals></Testimonals>
    </div>
  );
};
