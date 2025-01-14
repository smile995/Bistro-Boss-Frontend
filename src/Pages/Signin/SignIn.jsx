/* eslint-disable no-unused-vars */
import woodBg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import image from "../../assets/others/authentication2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import useBistro from "../../Hooks/useBistro";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../SharedComponents/SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
const SignIn = () => {
  const navigate= useNavigate();
  const { user, loading,userSignIn } = useBistro();
  const [disable, setDisable] = useState(true);
  const [seen, setSeen] = useState(false);
  const [eye, setEye] = useState(false);
  const notify = () => toast("You are logged in successfully");
  const CaptchaRef = useRef();
  const handleSeenPassword = () => {
    setSeen(!seen);
    setEye(!eye);
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email,password)
    .then(result=>{
      const currentUser= result.user
      if(currentUser.email){
        notify();
        navigate("/")
        form.reset();
      }
    })
    .catch(error=>{
      alert("Something went wrong")
    })
  };

  const validedCaptchaValue = () => {
    const Captcha_value = CaptchaRef.current.value;
    if (validateCaptcha(Captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
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
              <ToastContainer />
            </div>
          </div>
          <div className="mt-5">
            <LoadCanvasTemplate />
          </div>

          <div className="flex justify-between items-end  gap-2">
            <div className="form-control flex-1 ">
              <label className="label">
                <span className="label-text">Captcha*</span>
              </label>
              <input
                type="text"
                placeholder="Type the Captcha above"
                name="captcha"
                ref={CaptchaRef}
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <button
                onClick={validedCaptchaValue}
                className="btn btn-secondary"
              >
                Valided
              </button>
            </div>
          </div>

          <div className="mt-5">
            <input
              disabled={disable}
              className="px-5 btn py-3 w-full rounded text-white font-semibold bg-[#dbb884]"
              type="submit"
              value="Login"
            />
          </div>
          <div className="my-6 text-center">
            <h2 className="text-[#dbb884] text-xl">
              New here?{" "}
              <Link
                className="font-semibold hover:underline hover:text-[#0056b3] "
                to={"/signup"}
              >
                Create a New Account
              </Link>{" "}
            </h2>
          </div>
          <div>
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
