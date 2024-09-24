import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeToCart } from "../redux/slices/CartSlice.jsx"
import {increment} from "../redux/slices/CartSlice.jsx";
import {decrement} from "../redux/slices/CartSlice.jsx"

const CardItem = ({id,img,price,qty,name}) => {
  const dispatch=useDispatch();
  return (
    <div className="relative flex items-center justify-between bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out m-1">
     
      <img
        src={img}
        alt="no image"
        className="w-16 h-16 rounded-lg "
      />

      <div className="ml-4 flex-1">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">
          <span className="text-xl font-bold">&#8377;</span>{price}
        </p>
      </div>

      <MdDelete className="absolute top-2 right-2 text-2xl text-gray-600 cursor-pointer hover:text-red-500 transition-colors" onClick={()=> dispatch(removeToCart({id,img,name,qty,price}))} />

    
      <div className="flex items-center space-x-2 absolute top-10 right-1">
        <CiCircleMinus className="text-2xl text-gray-600 cursor-pointer hover:text-red-600 transition-colors" onClick={()=>dispatch(decrement({id}))}/>
        <p className="text-lg font-semibold">{qty}</p>
        <CiCirclePlus className="text-2xl text-gray-600 cursor-pointer hover:text-green-500 transition-colors" onClick={()=> dispatch(increment({id}))}/>
      </div>
    </div>
  );
};

export default CardItem;
