import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const handletost = (name) => toast.success(`${name} Added `);
  const categery = useSelector((state) => state.categery);
  console.log(categery);
  const Search = useSelector((state)=> state.Search);
  console.log(Search);
  
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap justify-center lg:justify-start">
  {FoodData.filter((food) => {
   
    if (categery === "All") {
      return food.name.toLowerCase().includes(Search?.toLowerCase() || "");
    } else {
      return categery === food.category && 
      food.name.toLowerCase().includes(Search?.toLowerCase() || "");
    }
  }).map((food) => (
    <FoodCard
      key={food.id}
      id={food.id}
      name={food.name}
      desc={food.desc.slice(0, 48).concat("....")}
      category={food.category}
      img={food.img}
      rating={food.rating}
      price={food.price}
      handletost={handletost}
    />
  ))}
</div>

    </>
  );
};
export default FoodItem;
