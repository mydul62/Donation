
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const CardItem = ({data}) => {
  const {id,title,button_text_color,card_bg,category,picture,text_button_bg}=data;
  return (
    <Link to={`/categoryDetails/${id}`}>
    <Card style={{
      backgroundColor:card_bg,
    }} className=" overflow-hidden bg-[blue] rounded-t-lg">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-none"
    >
      <img className=" max-h-[180px] w-full rounded-t-lg"
        src={picture}
        alt="ui/ux review check"
      />
    </CardHeader>
    <CardBody className=" p-4">
      <button style={{
        color:button_text_color,
        backgroundColor:text_button_bg,
      }} className=" px-5 py-2 bg-[red] rounded-md font-bold text-[black]">{category}</button> 
      <Typography variant="lead" color="gray" className="mt-3 font-normal">
      {title}
      </Typography>
    </CardBody>
  
  </Card>
  </Link>
  );
};

export default CardItem;