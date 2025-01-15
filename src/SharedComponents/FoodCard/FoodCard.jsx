import { Link, useLocation, useNavigate } from "react-router-dom";
import useBistro from "../../Hooks/useBistro";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

/* eslint-disable react/prop-types */
const FoodCard = ({ food }) => {
  const axiosSecure= useAxiosSecure()
  const { user } = useBistro();
  const location = useLocation();
  const navigate = useNavigate();
  const { name, image, price, recipe } = food;
  const handleAddToCart = (item) => {
    if (user && user?.email) {
      const now = new Date();
      const orderTime = now.toLocaleString();
      console.log(orderTime);

      const cardInfo = {
        foodId: item?._id || "",
        userName: user?.displayName,
        userEmail: user?.email,
        name,
        image,
        price,
        recipe,
        orderTime,
      };

      axiosSecure.post("/carts", cardInfo).then((res) => {
        if (res?.data?.insertedId) {
          Swal.fire({
            title: `${name} add to cart`,
            icon: "success",
            draggable: true,
          });
        }
      });
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
          navigate("/signin", { state: location.pathname });
        }
      });
    }
  };
  return (
    <div className="bg-[#f2f2f2] rounded flex flex-col">
      <div className="relative">
        <figure>
          <img className="rounded-t w-full" src={image} alt="Food Item" />
        </figure>
        <p className="bg-[#e8e8e8] text-[#BB8506] border-2 px-3 py-1 font-semibold rounded absolute top-4 right-4 text-xl">
          ${price}
        </p>
      </div>
      <div className="card-body text-center flex flex-col flex-grow">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="flex-grow my-4">{recipe}</p>
        <div className="card-actions justify-center">
          <Link>
            <button
              onClick={() => handleAddToCart(food)}
              className="text-[#BB8506] uppercase bg-[#e8e8e8] rounded py-3 px-4 font-semibold border-b-2 border-[#BB8506] hover:bg-[#1F2937]"
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
