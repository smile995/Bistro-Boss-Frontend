import woodBg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import image from "../../assets/others/authentication2.png";
const SignIn = () => {
  return (
    <div
      className="min-h-screen md:flex  md:gap-10 items-center md:p-10 p-5"
      style={{
        backgroundImage: `url(${woodBg})`, // Use the imported image
        backgroundSize: "cover", // Optional: Cover the entire container
        backgroundPosition: "center", // Optional: Center the image
        backgroundRepeat: "no-repeat", // Optional: Prevent repeating
      }}
    >
      <div className="md:max-w-1/2">
        <img className="w-full" src={image} alt="image missing" />
      </div>
      <div className="flex-1">
        <form>
          <h3 className="md:text-4xl text-2xl font-bold text-center">Login</h3>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Example@gmail.com"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Password*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type your password"
              className="input input-bordered"
              required
            />
          </div>
          <div>
            <h1>react capche will comes here</h1>
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Captcha*</span>
            </label>
            <input
              type="text"
              placeholder="Type the Captcha here"
              name="captcha"
              className="input input-bordered"
              required
            />
            
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-5 py-3 rounded text-white font-semibold bg-[#dbb884]  w-full  "
            > Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
