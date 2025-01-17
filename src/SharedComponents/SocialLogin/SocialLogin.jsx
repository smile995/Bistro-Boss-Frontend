import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const notify = (message) => toast(message);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const signinwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const currentUser = result.user;
        const user = {
          name: currentUser.displayName,
          email: currentUser.email,
        };
        if (currentUser.email) {
          axiosPublic.post("/users", user).then((res) => {
            if (res.data.insertedId) {
              notify("Your information is stored in database");
            } else {
              notify("Your are already in our database");
            }
          });
        }
        notify("You are logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        notify(error.message);
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
