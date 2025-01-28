import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import useBistro from "../../Hooks/useBistro";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useBistro();
  const [rating, setRating] = useState(0);
  const axiosSecure = useAxiosSecure();
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const details = form.details.value;
    const like = form.like.value;
    const suggestion = form.suggestion.value;
    const review = {
      name: user?.displayName,
      email: user?.email,
      rating,
      details,
      suggestion,
      like,
    };
    axiosSecure.post("/reviews", review).then((res) => {
      if (res?.data?.insertedId) {
        form.reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your review is saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle subheading="Sharing is Caring!!!" heading="Give a Review" />
      <div className="md:w-4/5 mx-auto bg-white p-5 md:p-10 rounded">
        <h3 className="text-3xl text-center font-bold mb-5">RATE US!</h3>
        <div className="flex justify-center">
          <Rating
            isRequired
            style={{ maxWidth: 250 }}
            value={rating}
            onChange={setRating}
          />
        </div>
        <div>
          <form onSubmit={handleAddReview}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold text-xl">
                  Which recipe you liked most?
                </span>
              </div>
              <input
                type="text"
                name="like"
                placeholder="Recipe you like most"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold text-xl">
                  Do you have any suggestion for us?
                </span>
              </div>
              <input
                type="text"
                name="suggestion"
                placeholder="suggestion"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text font-semibold text-xl">
                  Kindly express your care in a short way.
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered min-h-24"
                placeholder="Review in details"
                name="details"
              ></textarea>
            </label>
            <div className="mt-6 flex items-center justify-center">
              <button
                type="submit"
                className="px-5 py-3 rounded text-white font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center gap-2 "
              >
                {" "}
                Send Message <FaPaperPlane />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
