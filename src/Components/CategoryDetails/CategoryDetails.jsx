import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";

const CategoryDetails = () => {
  const { data } = useDonationData();
  const { id } = useParams();
  const [categoryData, setCategory] = useState(null); // Initialize as null

  useEffect(() => {
    if (id && data) { // Check if id and data are available
      const newData = data.find((d) => d.id === +id);
      setCategory(newData);
    }
  }, [data, id]); // Include data and id in the dependency array

  return (
   <div className=" max-w-7xl mx-auto">
     <div className=" my-20 card bg-base-100 shadow-xl rounded-t-lg">
  <figure className=" relative"><img className="w-full" src={categoryData && categoryData.picture} alt="Shoes" />
  <div className=" absolute bottom-5  left-5">
    <button style={{
      backgroundColor:categoryData && categoryData.category_bg,
      color:categoryData && categoryData.button_text_color
    }} className=" px-5 py-2 bg-[red] rounded-md font-bold text-[black]">Donation {categoryData && categoryData.price}</button> 
    </div>
  </figure>
  <div className="card-body space-y-6">
    <h2 className="card-title text-[40px]  font-bold text-[#0B0B0B]">
    {categoryData && categoryData.title}
    </h2>
    <p> {categoryData && categoryData.description}</p>
  </div>
</div>
   </div>
  );
};

export default CategoryDetails;
