import { FaStar } from "react-icons/fa";

const FoodCard = ({ img, desc, name, rating, id, price }) => {
  return (
    <div className="w-full sm:w-[60vw] lg:w-[20vw] bg-white shadow-lg rounded-lg overflow-hidden m-4 ms-7">
      <img
        src={img}
        alt={name}
        className="w-full h-40 transform transition-all duration-300 hover:scale-105 cursor-pointer"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-lg font-semibold text-orange-500">
            <span>&#8377;</span>{price}
          </p>
        </div>
        <p className="text-gray-500 mb-4">
          {desc}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-yellow-500">
            <FaStar className="mr-1" />
            <span className="font-bold">{rating}</span>
          </div>
          <button className="bg-orange-500 font-semibold text-white px-2 py-1 rounded-md shadow-md hover:bg-orange-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
