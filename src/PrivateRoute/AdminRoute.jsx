/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useBistro from "../Hooks/useBistro";

const AdminRoute = ({ children }) => {
  const { user, loading } = useBistro();
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();
  if (loading || isLoading) {
    <div className="flex justify-center items-center h-[90vh]">
      <div>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    </div>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/signin"} state={location.pathname} replace />;
};

export default AdminRoute;
