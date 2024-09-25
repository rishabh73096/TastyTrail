import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const NavBar = () => {
  const dispatch = useDispatch()
  return (
    <>
      <nav className="flex flex-wrap lg:flex-nowrap lg:justify-between items-center bg-gray-800 text-white p-3 shadow-md">
        <div className="w-full lg:w-auto mb-2 lg:mb-0">
          <Link className="text-[23px] font-bold ps-3" to="/">Tastytails Foods</Link>
        </div>
        <div className="w-full lg:flex-grow max-w-lg ml-0 lg:ml-5">
          <input
            type="search"
            onChange={(e)=> dispatch(setSearch(e.target.value))}
            placeholder="Search delicious food..."
            className="w-full p-2 outline-none border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-black focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
