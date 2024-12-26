import FoodCard from "../../../SharedComponents/FoodCard/FoodCard"
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle"


const Recomandation = () => {
  return (
    <div>
        <div>
            <SectionTitle heading={"cheff recomands"} subheading={"Should Try"}></SectionTitle>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
        </div>
    </div>
  )
}

export default Recomandation