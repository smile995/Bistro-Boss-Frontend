import {  useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useManu = () => {
  const axiosPublic = useAxiosPublic();
  const [manus, setManus] = useState([]);
  axiosPublic.get("/foods").then((res) => {
    setManus(res.data);
  });
  return [manus];
};

export default useManu;
