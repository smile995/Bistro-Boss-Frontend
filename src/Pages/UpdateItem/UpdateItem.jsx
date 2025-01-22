import { useForm } from "react-hook-form";
import useManu from "../../Hooks/useManu";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
const imageHostingkey = import.meta.env.VITE_image_api;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingkey}`;
const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [updateData, setupdateData] = useState();
  const [, refetch] = useManu();
  useEffect(() => {
    axiosSecure.get(`/foods/${id}`).then((res) => {
      setupdateData(res.data);
    });
  }, [axiosSecure, id]);

  const onSubmit = async (data) => { 
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });  
    const imageLink = res?.data?.data?.display_url;
    const foodItem = {
      name: data?.name,
      image: imageLink,
      price: parseFloat(data?.price),
      category: data?.category,
      recipe: data?.recipe,
    };
      const response = await axiosSecure.patch(`/foods/${id}`, foodItem);
      if (response.data.modifiedCount>0) {
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
  
  };
  return (
    <div>
      <div>
        <SectionTitle
          subheading={"What's Update?"}
          heading={"Update An Item"}
        />
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
                defaultValue={updateData?.name}
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
                  defaultValue={updateData?.category}
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
                  type="text"
                  defaultValue={updateData?.price}
                  placeholder="Price"
                  {...register("price")}
                  className="input input-bordered"
                  
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Recipe Details</span>
              </label>
              <textarea
                {...register("recipe")}
                defaultValue={updateData?.recipe}
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
                Update Item <FaUtensils />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
