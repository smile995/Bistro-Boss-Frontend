import { Link, useNavigate } from "react-router-dom";
import useBistro from "../../Hooks/useBistro";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const FoodCard = ({ food }) => {
  const { user } = useBistro();
  const navigate = useNavigate();
  const { name, image, price, recipe } = food;

  const handleAddToCart = (item) => {
    if (user && user?.email) {
      console.log("good option", item);
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Do you want to log in first?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signin')
        }
      });
    }
  };
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
          <Link>
            <button
              onClick={() => handleAddToCart(food)}
              className="text-[#BB8506] uppercase bg-[#e8e8e8] rounded py-3 px-4 font-semibold border-b-2 border-[#BB8506] hover:bg-[#1F2937]"
            >
              add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
