import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import icon from '../../../assets/icon/quote.png'
import "@smastrom/react-rating/style.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonals = () => {
  const [resviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);


  return (
    <div className="my-10">
      <div>
        <SectionTitle
          heading={"Testimonials"}
          subheading={"What Our Clinets Says"}
        ></SectionTitle>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {resviews.map((review) => (
            <SwiperSlide key={review._id} className="my-10">
              <div className="text-center w-3/4 mx-auto space-y-2">
                <div className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
                <div className="flex justify-center">
                    <img src={icon} alt="" />
                </div>
                <p>{review.details}</p>
                <p className="text-[#CD9003] font-semibold text-xl">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonals;
