import toast from "react-hot-toast";

export const getDonation = () => {
  const localDonation = localStorage.getItem('donation');
  let donation = [];
  if (localDonation) {
    donation = JSON.parse(localDonation);
  }
  return donation;
}

export const saveDonation = (data) => {
  let newDonation = getDonation();
  let isExist = newDonation.find((dn) => dn.id === data.id);
  if (isExist) {
    toast.error("Already donated")
  } else {
    newDonation.push(data);
    localStorage.setItem('donation', JSON.stringify(newDonation));
  }
}


export const deleteDonation =(id)=>{
  console.log(id);
  let newDonation = getDonation();
  const filtData = newDonation.filter(dn=>dn.id!=id)
  console.log(filtData);
  localStorage.setItem('donation', JSON.stringify(filtData));
  return {newDonation};
}