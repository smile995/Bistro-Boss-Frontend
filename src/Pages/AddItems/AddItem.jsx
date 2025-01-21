import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useManu from "../../Hooks/useManu";
const imageHostingkey = import.meta.env.VITE_image_api;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingkey}`;

const AddItem = () => {
  const [, refetch] = useManu();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    const imageLink = res?.data?.data?.display_url;
    if (res?.data?.success) {
      const foodItem = {
        name: data?.name,
        image: imageLink,
        price: data?.price,
        category: data?.category,
        recipe: data?.recipe,
      };
      const res = await axiosSecure.post("/foods", foodItem);
      if (res.data.insertedId) {
        refetch();
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to manu item`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <div>
        <SectionTitle subheading={"What's New?"} heading={"Add An Item"} />
      </div>
      <div className="md:w-5/6 mx-auto bg-white rounded p-2 md:p-10">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Recipe Name*</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Food Name..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="md:flex gap-5 items-center">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-bold">Category*</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("category")}
                  className="select select-bordered"
                >
                  <option disabled value="default">
                    Select Category
                  </option>
                  <option value="pizza">Pizza</option>
                  <option value="salad">Salad</option>
                  <option value="drinks">Drinks</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="popular">Popular</option>
                </select>
              </label>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-bold">Price*</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price")}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Recipe Details</span>
              </label>
              <textarea
                {...register("recipe")}
                className="textarea textarea-bordered"
                placeholder="Write details abot food"
              ></textarea>
            </div>
            <div className="mt-3">
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered"
              />
            </div>
            <div className=" mt-3">
              <button
                type="submit"
                className="px-5 py-3 rounded text-white font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center gap-2 "
              >
                {" "}
                Add Item <FaUtensils />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
