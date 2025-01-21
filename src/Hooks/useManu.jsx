import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useManu = () => {
  const axiosPublic = useAxiosPublic();
  const { data:menus, refetch } = useQuery({
    queryKey:["foods"],
    queryFn: async ()=>{
      const res= await axiosPublic.get("/foods")
      console.log(res.data);
      
      return res.data
    }
  })
  return [menus, refetch];
};

export default useManu;
