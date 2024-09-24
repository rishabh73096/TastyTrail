import { TiDelete } from "react-icons/ti";
import CardItem from "./CardItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activecart, setActivecart] = useState(false);
  const CardItems = useSelector((state) => state.Cart.Cart);
  const totalQty =CardItems.reduce((totalQty,item)=> totalQty+item.qty,0)
  const totalPrice = CardItems.reduce((totalPrice,item)=> (item.qty*item.price),0)
  return (
    <>
      <div
        className={`fixed right-0 top-0 bg-white w-full lg:w-[25vw] h-full shadow-lg p-3 rounded-lg ${
          activecart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b pb-4 mb-2">
          <h2 className="text-xl font-bold text-gray-800">My Order</h2>
          <TiDelete
            className="text-3xl text-gray-600 cursor-pointer hover:text-red-500 transition-colors"
            onClick={() => setActivecart(!activecart)}
          />
        </div>

        <div className="space-y-2 overflow-y-auto max-h-[65vh] pb-2">
          {CardItems.map((food) => {
            return (
              <CardItem
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 ">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Items: {totalQty}</h2>
            <h2 className="text-lg font-semibold">Total: {totalPrice}</h2>
          </div>
          <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300">
            Checkout
          </button>
        </div>
      </div>
      {!activecart ? (
        <FaShoppingCart
          onClick={() => setActivecart(!activecart)}
          className={`text-3xl bg-orange-500 hover:bg-orange-600 w-[50px] h-[50px] p-3 rounded-full cursor-pointer transition-all duration-500 m-2 shadow-md fixed bottom-2 lg:right-2 right-0 ${totalQty > 0 && "animate-bounce transition-all delay-500 "}`}
        />
      ) : null}
    </>
  );
};

export default Cart;
