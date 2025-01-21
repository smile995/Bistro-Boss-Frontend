/* eslint-disable react/prop-types */

import FoodCard from "../../../SharedComponents/FoodCard/FoodCard"
const CategoryFood = ({categoty}) => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
        {
            categoty?.map(item=> <FoodCard key={item._id} food={item} />)
        }
    </div>
  )
}

export default CategoryFood