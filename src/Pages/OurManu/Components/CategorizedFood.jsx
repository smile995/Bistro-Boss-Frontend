/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import ItemViewer from "../../../SharedComponents/ItemViewer/ItemViewer"

const CategorizedFood = ({items}) => {
  console.log(items);
  
  return (
    <div className="mb-10">
        
        <div className=" grid md:grid-cols-2 gap-5 md:gap-10 p-3">
        {items.map((manu) => (
          <ItemViewer key={manu._id} manu={manu} />
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <Link to={'/our-food'}>
        <button className="px-5  py-3 font-semibold border-b-black  border-b-4 rounded-lg hover:text-[#BB8506] shadow-xl ">
        ORDER YOUR FAVOURITE FOOD
        </button></Link>
      </div>
    </div>
  )
}

export default CategorizedFood