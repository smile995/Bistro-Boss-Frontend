import featuredImage from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle";
import "../home.css";
const FeaturedItem = () => {
  return (
    <div className="featuredImg bg-fixed  my-10 ">
      <div className="bg-black bg-opacity-50 md:p-10 p-5">
        <div className="md:py-10 py-5 text-white">
          <SectionTitle
            heading={"FROM OUR MENU"}
            subheading={"Check It Out"}
          ></SectionTitle>
        </div>
        <div className="md:flex gap-16 items-center  ">
          <div>
            <img className="rounded-lg" src={featuredImage} />
          </div>
          <div className="text-white space-y-3">
            <p className="text-xl font-semibold">May 25, 2026</p>
            <p className="text-xl font-semibold">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              facere vitae harum, dolor ut alias, enim, ratione cumque
              exercitationem dolorum quisquam repudiandae magni dignissimos
              quibusdam pariatur aut amet delectus voluptas?
            </p>
            <button className="border-b-2 hover:border-[#D99904] hover:bg-black hover:text-[#D99904] rounded-xl py-2 px-4 text-white font-semibold shadow-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
