import useDonationData from "../../Hooks/useDonationData";
import CardItem from "../card/CardItem";
import MoonLoader from "react-spinners/MoonLoader";

const CategoryList = () => {
  const { data, loading } = useDonationData();
  if(loading) return <div className="flex justify-center mt-10"><MoonLoader color="#36d7b7" /></div>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1320px] mx-auto my-24">
      {data && data.map((item) => (
        <CardItem key={item.id} data={item} ></CardItem>
      ))}
    </div>
  );
};

export default CategoryList;
