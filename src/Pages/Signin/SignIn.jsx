import woodBg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import image from "../../assets/others/authentication2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
const SignIn = () => {
  const [seen, setSeen] = useState(false);
  const [eye, setEye] = useState(false);
  const handleSeenPassword = () => {
    setSeen(!seen);
    setEye(!eye)
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, password, captcha);
  };
  return (
    <div
      className="min-h-screen md:flex  md:gap-10 items-center md:p-10 p-5"
      style={{
        backgroundImage: `url(${woodBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:max-w-1/2">
        <img className="w-full" src={image} alt="image missing" />
      </div>
      <div className="flex-1">
        <form onSubmit={handleLogin}>
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
          <div className="flex items-end">
            <div className="form-control flex-1 ">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
              <input
                type={seen ? "text" : "password"}
                placeholder="Type your password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <button
                onClick={handleSeenPassword}
                className="-ml-14 text-black text-2xl p-3"
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div>
            <h1>react capche will comes here</h1>
          </div>

          <div className="flex justify-between items-end  gap-2">
            <div className="form-control flex-1 ">
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
            <div>
              <button className="btn btn-secondary">Valided</button>
            </div>
          </div>

          <div className="mt-6">
            <input
              className="px-5 py-3 w-full rounded text-white font-semibold bg-[#dbb884]"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
