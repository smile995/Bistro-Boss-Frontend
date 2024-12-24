import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
const OrderOnline = () => {
  return (
    <div className="my-4 space-y-4">
      <SectionTitle
        subheading="From 11:00am to 10:00pm"
        heading="Order Online"
      />
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <p className="uppercase md:-mt-16 -mt-6 text-center text-white md:text-2xl font-bold">salads</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <p className="uppercase md:-mt-16 -mt-6 text-center text-white md:text-2xl font-bold">pizzas</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <p className="uppercase md:-mt-16 -mt-6 text-center text-white md:text-2xl font-bold">soups</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <p className="uppercase md:-mt-16 -mt-6 text-center text-white md:text-2xl font-bold">cake</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <p className="uppercase md:-mt-16 -mt-6 text-center text-white md:text-2xl font-bold">salads</p>
          </SwiperSlide>
        
          <SwiperSlide>
            <img src={img2} alt="" />
            <p className="uppercase md:-mt-16 -mt-6 text-center text-white md:text-2xl font-bold">pizzas</p>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default OrderOnline;
