
import {
  Card,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import UseLocalStorageData from "../../Hooks/UseLocalStorageData/UseLocalStorageData";
import { useState } from "react";

const Donation = () => {
  const [show,setShow]=useState(false);
  const handleShowMore = ()=>{
      setShow(!show);
  }
  const {donation}= UseLocalStorageData()
  return (
   <>
    <div className="grid max-w-7xl mx-auto grid-cols-1 gap-6 md:grid-cols-2">
      {donation.slice(0,show?donation.length:4).map((data) => (
        <Card style={{
          backgroundColor:data.card_bg
        }}
          key={data.id} className="w-full max-w-[48rem] gap-4 items-center flex-row rounded-xl"
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
            <button style={{
              backgroundColor:data.category_bg,
              color:data.button_text_color
            }} className="bg-secondary py-1 px-2 rounded-md">
              {data.category}
            </button>
            <Typography className="text-2xl font-semibold text-[#0B0B0B]">
              {data.title}
            </Typography>
            <h3 className="font-semibold text-[#0052FF]">${data.price}</h3>
            <button style={{
              backgroundColor:data.text_button_bg,
              color:data.button_text_color
            }} className="text-[18px] font-semibold bg-secondary py-2 px-3 rounded-md">
              View Details
            </button>
          </div>
        </Card>
      ))}
    
    </div>
    <div onClick={handleShowMore} className=" flex justify-center my-6">
     <button className="btn btn-primary px-6 font-bold">{!show?'Show more':'Show less'}</button>
     </div>
   </>
    
  );
};

export default Donation;
