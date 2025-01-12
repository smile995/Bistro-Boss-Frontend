import woodBg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import image from "../../assets/others/authentication2.png";
const SignIn = () => {
  return (
    <div
      className="hero md:min-h-screen md:flex lg:gap-20 md:gap-10 items-center md:p-10 p-5"
      style={{
        backgroundImage: `url(${woodBg})`, // Use the imported image
        backgroundSize: "cover", // Optional: Cover the entire container
        backgroundPosition: "center", // Optional: Center the image
        backgroundRepeat: "no-repeat", // Optional: Prevent repeating
      }}
    >
      <div className="max-w-1/2">
        <img className="w-full" src={image} alt="image missing" />
      </div>
      <div className="md:max-w-1/2">
        <form>
        
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                placeholder="Example@gmail.com"
                className="input input-bordered"
                required
              />
            </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone*</span>
            </label>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="input input-bordered"
              required
            />
          </div>
         
       
          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="px-5 py-3 rounded text-white font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center gap-2 "
            > Send Message  </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
