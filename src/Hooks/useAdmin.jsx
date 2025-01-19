import { useQuery } from "@tanstack/react-query";
import useBistro from "./useBistro";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useBistro();
  const { data: isAdmin } = useQuery({
    queryKey: [user?.email, "isAdim"],
    queryFn: async () => {
      const res = await axiosSecure.get(`users/admin/${user?.email}`);
      return res.data;
    },
  });
  return [isAdmin];
};

export default useAdmin;
