import { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { useSelector } from "react-redux"; 

const CategeryMenu = () => {
  const [categries, setCategries] = useState([]);

  const listuniqueCategries = () => {
    const uniquecategries = [...new Set(FoodData.map((food) => food.category))];
    setCategries(uniquecategries);
  };

  useEffect(() => {
    listuniqueCategries();
  }, []);

  const dispatch = useDispatch();
  const selectedCategery = useSelector((state) => state.categery);
  console.log(selectedCategery);

  return (
    <>
      <div className="m-5 ms-7 ">
        <h2 className="text-[21px] mb-5 font-semibold"> Find the best food</h2>
        <div className="w-full flex flex-wrap gap-2 justify-center lg:justify-start sm:px-4 ">
          <button
            onClick={() => dispatch(setCategory("All"))}
            className={`btn px-3 py-2 bg-gray-300 text-black font-bold rounded-md shadow-md hover:bg-orange-500 active:bg-orange-600 sm:px-6 sm:py-3 transition-all duration-300 ease-in-out ${
              selectedCategery === "All" && "bg-orange-500 text-white"
            }`}
          >
            All
          </button>

          {categries.map((categery, index) => (
            <button
              key={index} // Moved key to the button
              onClick={() => dispatch(setCategory(categery))}
              className={`btn px-3 py-2 bg-gray-300 text-black font-bold rounded-md shadow-md hover:bg-orange-500 active:bg-orange-600 sm:px-6 sm:py-3 transition-all duration-300 ease-in-out ${
                selectedCategery === categery && "bg-orange-500 text-white"
              }`}
            >
              {categery}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategeryMenu;
