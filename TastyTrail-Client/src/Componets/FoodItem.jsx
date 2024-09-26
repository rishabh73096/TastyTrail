import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const handletost = (name) => toast.success(`${name} Added `);
  const categery = useSelector((state) => state.categery);
  console.log(categery);
  const Search = useSelector((state) => state.Search);
  console.log(Search);

  const filteredFood = FoodData.filter((food) => {
    if (categery === "All") {
      return food.name.toLowerCase().includes(Search?.toLowerCase() || "");
    } else {
      return categery === food.category && 
        food.name.toLowerCase().includes(Search?.toLowerCase() || "");
    }
  });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap justify-center lg:justify-start">
        {filteredFood.length > 0 ? (
          filteredFood.map((food) => (
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
          ))
        ) : (
          <div className="w-full lg:h-[20vw] h-[50vw] text-center border-top">
          <h2 className="text-2xl font-semibold mt-7 text-gray-800">No Items Found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default FoodItem;
