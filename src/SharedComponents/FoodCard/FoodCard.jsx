import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const FoodCard = ({ food }) => {
  const { name, image, price, recipe } = food;
  return (
    <div className=" bg-[#f2f2f2] rounded">
      <div className="relative">
        <figure>
          <img className=" rounded-t w-full " src={image} alt="Shoes" />
        </figure>
        <p className="bg-[#e8e8e8] text-[#BB8506] border-2  px-3 py-1 font-semibold rounded absolute top-4 right-4 text-xl">
          ${price}
        </p>
      </div>
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <Link >
            <button className="text-[#BB8506] uppercase bg-[#e8e8e8] rounded py-3 px-4 font-semibold border-b-2 border-[#BB8506] hover:bg-[#1F2937]">
              add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
