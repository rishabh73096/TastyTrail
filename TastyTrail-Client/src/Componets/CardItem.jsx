import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const CardItem = () => {
  return (
    <div className="relative flex items-center justify-between bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out m-1">
     
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt="Pizza"
        className="w-16 h-16 rounded-lg "
      />

      <div className="ml-4 flex-1">
        <h2 className="text-lg font-semibold text-gray-800">Pizza</h2>
        <p className="text-gray-600">
          <span className="text-xl font-bold">&#8377;</span>120
        </p>
      </div>

      <MdDelete className="absolute top-2 right-2 text-2xl text-gray-600 cursor-pointer hover:text-red-500 transition-colors" />

    
      <div className="flex items-center space-x-2 absolute top-10 right-1">
        <CiCircleMinus className="text-2xl text-gray-600 cursor-pointer hover:text-red-600 transition-colors" />
        <p className="text-lg font-semibold">1</p>
        <CiCirclePlus className="text-2xl text-gray-600 cursor-pointer hover:text-green-500 transition-colors" />
      </div>
    </div>
  );
};

export default CardItem;
