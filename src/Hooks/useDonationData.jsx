
import { useEffect, useState } from "react";

const useDonationData = () => {
  const [data,setData]=useState([]);
  const [loading,setloading]=useState(true);

  useEffect(()=>{
    setloading(true)
    const fetchData =async()=>{
         const res=await fetch('/Data.json')
         const data = await res.json();
         setData(data)
         setloading(false)
    };
    fetchData()
  },[])
  return {data,loading}
};

export default useDonationData;