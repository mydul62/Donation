import { useEffect, useState } from "react";
import { getDonation } from "../../Hooks/Localstorage/Localstorage";
import {
  Card,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const Donation = () => {
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    setDonation(getDonation());
  }, []);

  return (
   <>
    <div className="grid max-w-7xl mx-auto grid-cols-1 gap-6 md:grid-cols-2">
      {donation.map((data) => (
        <Card style={{
          backgroundColor:data.card_bg
        }}
          key={data.id} className="w-full max-w-[48rem] gap-4 items-center flex-row"
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={data.picture}
              alt="card-image"
              className="h-[250px] w-full object-cover"
            />
          </CardHeader>
          <div className="space-y-4">
            <button className="bg-secondary py-1 px-2 rounded-md">
              {data.category}
            </button>
            <Typography className="text-2xl font-semibold text-[#0B0B0B]">
              {data.title}
            </Typography>
            <h3 className="font-semibold text-[#0052FF]">${data.price}</h3>
            <button className="text-[18px] font-semibold bg-secondary py-2 px-3 rounded-md">
              View Details
            </button>
          </div>
        </Card>
      ))}
    
    </div>
    <div className=" flex justify-center my-6">
     <button className="btn btn-primary px-6 ">Show more</button>
     </div>
   </>
    
  );
};

export default Donation;
