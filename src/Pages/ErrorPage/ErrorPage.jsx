import errorPage from "../../assets/404.gif";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div >
        <img src={errorPage} alt="" />
        <h1 className="text-red-700 text-3xl md:text-6xl font-bold text-center">Page not Found</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
