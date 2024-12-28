import useManu from "../../../Hooks/useManu"
import FoodCard from "../../../SharedComponents/FoodCard/FoodCard"
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle"


const Recomandation = () => {
  const [manus]= useManu();
  const offereds = manus.filter((item) => item.category === "offered");
  return (
    <div>
        <div>
            <SectionTitle heading={"cheff recomands"} subheading={"Should Try"}></SectionTitle>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
              offereds.map(item=><FoodCard key={item._id} food={item}/>)
            }
        </div>
    </div>
  )
}

export default Recomandation