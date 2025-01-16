import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useBistro from "./useBistro"


const useCart = () => {
    const {user}=useBistro()
    const axiosSecure=useAxiosSecure()
  const {data,refetch}= useQuery({
    queryKey:["cart", user?.email],
    queryFn: async ()=>{
        const response= await axiosSecure.get(`/carts?email=${user?.email}`);
        return response?.data;
    }
    
  })
  return [data,refetch]
}

export default useCart