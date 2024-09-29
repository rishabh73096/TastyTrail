import NavBar from "../Componets/NavBar";
import Footer from "../Componets/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Sucess = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full h-[150vw] bg-gray-100 lg:h-[37vw] sm:h-[50vw]">

        {loading ? (
          <PropagateLoader color="#ffab00" />
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 transition-opacity duration-500 ease-in text-center ">
              Your Order Successfully Placed
            </h2>
            <Link to="/" className="mt-6">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-600 transition-all duration-500">
                Go Back to Home
              </button>
            </Link>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Sucess;
