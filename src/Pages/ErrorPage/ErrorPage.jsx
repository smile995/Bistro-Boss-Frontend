import { Link } from "react-router-dom";
import errorPage from "../../assets/404.gif";
import { FaHome } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={errorPage} alt="" />
        <div className="flex justify-center">
          <Link to={"/"}>
            <button
              type="submit"
              className="px-5 py-3 rounded text-white font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center gap-2 "
            >
              {" "}
              Back Home <FaHome />{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
