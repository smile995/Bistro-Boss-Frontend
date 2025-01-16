import useCart from "../../Hooks/useCart";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";

const MyCart = () => {
  const [data] = useCart();
  const totalPrice = data?.reduce((acc, item) => {
    return acc + item?.price;
  }, 0);

  return (
    <div>
      <SectionTitle subheading={"My Cart"} heading={"WANNA ADD MORE"} />
      <div className="md:w-4/5 mx-auto bg-white rounded p-2 md:p-10">
        <div className="flex justify-between items-center">
          <h3 className="md:text-2xl font-bold">Total Items: {data?.length}</h3>
          <h3 className="md:text-2xl font-bold">Total Price: {totalPrice}</h3>
          <button className="bg-[#D1A054] px-3 text-white py-2 rounded text-xl font-semibold">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
             
            </tbody>
         
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
