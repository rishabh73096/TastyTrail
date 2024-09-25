
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const YourComponent = ({element}) => {
 
  const cardItems = useSelector((state)=> state.Cart.Cart); 
  console.log(cardItems);
   
  return cardItems.length > 0 ? element : <Navigate to="/" />


};

export default YourComponent;
