import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData.js";

const FoodItem = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center lg:justify-start ">
      {FoodData.map((food) => {
        return (
        <FoodCard 
         key={food.id}
         name={food.name} 
         desc={food.desc.slice(0,48).concat("....")} 
         category={food.category} 
         img={food.img}
         rating={food.rating} 
         price={food.price}/>
        );
      })}
    </div>
      
    </>
  );
};
export default FoodItem;
