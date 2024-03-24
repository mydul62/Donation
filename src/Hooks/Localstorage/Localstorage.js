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
    alert('Already exists');
  } else {
    newDonation.push(data);
    localStorage.setItem('donation', JSON.stringify(newDonation));
  }
}

