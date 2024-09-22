import { Link } from "react-router-dom";
import NavBar from "../Componets/NavBar";
import Footer from "../Componets/Footer";


const Error = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full h-[40vw] bg-gray-100">
        <h1 className="text-6xl font-bold text-orange-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link to="/" className="mt-6">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-600 transition-all">
            Go Back to Home
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
