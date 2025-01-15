import { Navigate, useLocation } from "react-router-dom";
import useBistro from "../Hooks/useBistro";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useBistro();
  const location = useLocation();
  if (loading) {
    <div className="flex justify-center items-center h-[90vh]">
      <div>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    </div>;
  } else if (user && user?.email) {
    return children;
  } else {
    <Navigate state={location.pathname} replace />;
  }
};

export default PrivateRoute;
