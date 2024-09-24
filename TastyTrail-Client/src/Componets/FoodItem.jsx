import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData.js";
import toast, { Toaster}  from "react-hot-toast";

const FoodItem = () => {
  const handletost = (name) => toast.success(`${name} Added `);
 
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className="flex flex-wrap justify-center lg:justify-start ">
      {FoodData.map((food) => {
        return (
        <FoodCard 
         key={food.id}
         id={food.id}
         name={food.name} 
         desc={food.desc.slice(0,48).concat("....")} 
         category={food.category} 
         img={food.img}
         rating={food.rating} 
         price={food.price}
         handletost={handletost}
       
         />
        );
      })}
    </div>
      
    </>
  );
};
export default FoodItem;
