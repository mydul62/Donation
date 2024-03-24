import { useEffect, useState } from "react";
import { getDonation } from "../Localstorage/Localstorage";

const UseLocalStorageData = () => {
  const [donation, setDonation] = useState([]);
  useEffect(() => {
    setDonation(getDonation());
  }, []);

  return {donation}
  
};

export default UseLocalStorageData;