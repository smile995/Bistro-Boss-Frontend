import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";

const AddItem = () => {
  return (
    <div>
      <div>
        <SectionTitle subheading={"What's New"} heading={"Add An Item"} />
      </div>
      <div className="md:w-5/6 mx-auto bg-white rounded p-2 md:p-10">
        <div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Name*</span>
              </label>
              <input
                type="text"
                placeholder="Food Name..."
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="md:flex gap-5 items-center">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Select Category
                  </option>
                  <option>Pizza</option>
                  <option>Salad</option>
                  <option>Drinks</option>
                  <option>Soup</option>
                  <option>Dessert</option>
                </select>
              </label>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write details abot food"
              ></textarea>
            </div>
            <div>
              <input
                type="file"
                className="file-input file-input-bordered file-input-accent w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
