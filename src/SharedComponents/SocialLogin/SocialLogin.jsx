import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="text-center font-semibold">Or Sign in with</h3>
      <div className="flex justify-center items-center mt-3 gap-8">
        <button className="btn btn-circle btn-outline">
         <FaGoogle className="text-2xl"/>
        </button>
        <button className="btn btn-circle btn-outline">
         <FaFacebookF className="text-2xl"/>
        </button>
        <button className="btn btn-circle btn-outline">
         <FaGithub className="text-2xl"/>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
