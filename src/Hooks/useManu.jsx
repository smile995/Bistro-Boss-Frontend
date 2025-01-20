import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useManu = () => {
  const axiosPublic = useAxiosPublic();
  const [manus, setManus] = useState([]);
  useEffect(() => {
    axiosPublic.get("/foods").then((res) => {
      setManus(res.data);
    });
  }, [axiosPublic]);
  return [manus];
};

export default useManu;
