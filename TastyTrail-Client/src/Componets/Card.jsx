import { TiDelete } from "react-icons/ti";
import CardItem from "./CardItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import toast, { Toaster}  from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activecart, setActivecart] = useState(false);
  const CardItems = useSelector((state) => state.Cart.Cart);
  const totalQty = CardItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = CardItems.reduce(
    (totalPrice, item) =>totalPrice=totalPrice + item.qty * item.price,
    0
  );
 // const handleCartToast = () => toast.success(`Empty cart`);
  const handletost = (name) =>{
    toast.success(`${name} deleted.`, {
      style: {
        border: '1px solid #ff0000',
        padding: '16px',
        color: '#ff0000',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  };
 const navigate= useNavigate();

  return (
    <><Toaster position="top-center" reverseOrder={false} />
      <div
        className={`fixed right-0 top-0 bg-white w-full lg:w-[25vw] h-full shadow-lg p-3 rounded-lg ${
          activecart ? "translate-x-0" : "translate-x-full"
        } "transition-all duration-500 ease-in-out"`}
      >
        <div className="flex justify-between items-center border-b p-2 pb-4 mb-2">
          <h2 className="text-xl font-bold text-gray-800">My Order</h2>
          <TiDelete
            className="text-3xl text-gray-600 cursor-pointer hover:text-red-500 transition-colors"
            onClick={() => setActivecart(!activecart)}
          />
        </div>

        <div className="space-y-2 overflow-y-auto max-h-[65vh] pb-2">
          {CardItems.length > 0 ? CardItems.map((food) => {
            return (
              <>
                <CardItem
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  img={food.img}
                  qty={food.qty}
                 handletost={handletost}
                />
              </>
            );
          }) :(<h2 className="text-[20px] p-2 font-bold text-gray-900">
             No Items added in cart
          </h2>)}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 ">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Items: {totalQty}</h2>
            <h2 className="text-lg font-semibold">Total: {totalPrice}</h2>
          </div>
         <div className="border-t ">
          <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300 mt-3" onClick={()=>{
                  navigate("/sucess")
                 // dispatch(clearCart())
                
                //  handleCartToast();
            
            }}>
            Checkout
          </button>
         </div>

          
        </div>
      </div>
      {!activecart ? (
        <FaShoppingCart
          onClick={() => setActivecart(!activecart)}
          className={`text-3xl bg-orange-500 hover:bg-orange-600 w-[50px] h-[50px] p-3 rounded-full cursor-pointer transition-all duration-500 m-2 shadow-md fixed bottom-2 lg:right-2 right-0 ${
            totalQty > 0 && "animate-bounce transition-all delay-500 "
          }`}
        />
      ) : null}
    </>
  );
};

export default Cart;
