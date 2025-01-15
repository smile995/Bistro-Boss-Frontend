import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SocialLogin = () => {
  const navigate = useNavigate();
  const notify = () => toast("You are logged in successfully");
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const signinwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user.email) {
          notify();
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);

        console.log(error.message);
      });
  };

  const signinwithGithub = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.email) {
          notify();
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h3 className="text-center font-semibold">Or Sign in with</h3>
      <div className="flex justify-center items-center mt-3 gap-8">
        <button
          onClick={signinwithGoogle}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle className="text-2xl" />
        </button>
        <button
          onClick={signinwithGithub}
          className="btn btn-circle btn-outline"
        >
          <FaGithub className="text-2xl" />
        </button>
        <button className="btn btn-circle btn-outline">
          <FaFacebookF className="text-2xl" />
        </button>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SocialLogin;
