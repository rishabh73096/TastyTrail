import NavBar from "../Componets/NavBar"
import Footer from "../Componets/Footer"
import { Link } from "react-router-dom"
const Sucess=()=> {
    return (
      <>
         <NavBar />
      <div className="flex flex-col items-center justify-center w-full h-[37vw] bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Your Order Sucessfully Placed
        </h2>
        <Link to="/" className="mt-6">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-600 transition-all">
            Go Back to Home
          </button>
        </Link>
      </div>
      <Footer />
      </>
    )
  }
  
  export default Sucess
  