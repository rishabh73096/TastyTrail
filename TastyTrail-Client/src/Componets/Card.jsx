import { TiDelete } from "react-icons/ti";
import CardItem from "./CardItem";
import { useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const [activecart,setActivecart]=useState(true);
    const CardItems = useSelector((state)=> state.Cart.Cart);
    console.log(CardItems);
  return (
    <>
      <div className={`fixed right-0 top-0 bg-white w-full lg:w-[25vw] h-full shadow-lg p-3 rounded-smn ${activecart? "translate-x-0": "translate-x-full"}`}>

        <div className="flex justify-between items-center border-b pb-4 mb-2">
          <h2 className="text-xl font-bold text-gray-800">My Order</h2>
          <TiDelete className="text-3xl text-gray-600 cursor-pointer hover:text-red-500 transition-colors" 
          onClick={()=> setActivecart(!activecart)}
          />
        </div>

     
        <div className="space-y-2 overflow-y-auto max-h-[65vh] pb-2">
          <CardItem />
          <CardItem />
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 p-5 ">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Items: 3</h2>
            <h2 className="text-lg font-semibold">Total: ₹360</h2>
          </div>
          <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
