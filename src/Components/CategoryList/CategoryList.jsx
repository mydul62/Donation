import useDonationData from "../../Hooks/useDonationData";
import CardItem from "../card/CardItem";

const CategoryList = () => {
  const { data, loading } = useDonationData();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1320px] mx-auto my-24">
      {data && data.map((item) => (
        <CardItem key={item.id} data={item} ></CardItem>
      ))}
    </div>
  );
};

export default CategoryList;
