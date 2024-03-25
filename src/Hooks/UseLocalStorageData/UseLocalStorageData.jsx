import { useEffect, useState } from "react";
import { deleteDonation, getDonation } from "../Localstorage/Localstorage";

const UseLocalStorageData = () => {
  const [donation, setDonation] = useState([]);
  useEffect(() => {
    setDonation(getDonation());
    const {newDonation } = deleteDonation();
    setDonation(newDonation)
  }, []);
  

  return {donation}
  
};

export default UseLocalStorageData;