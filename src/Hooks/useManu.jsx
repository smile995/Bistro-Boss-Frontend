import { useEffect, useState } from "react";

const useManu = () => {
  const [manus, setManus] = useState([]);
  useEffect(() => {
    fetch("manu.json")
      .then((res) => res.json())
      .then((data) => setManus(data));
  }, []);
  return [manus];
};

export default useManu;
