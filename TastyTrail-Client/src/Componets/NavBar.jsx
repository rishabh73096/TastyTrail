const NavBar = () => {
  return (
    <>
      <div
        className="flex lg:justify-between m-4 ms-7 ">
        <div>
          <p className="text-[21px] text-gray-600 font-semibold"> {new Date().toString().slice(0, 16)}</p>
          <p className="text-[23px] font-bold"> Tastytails Foods </p>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search here"
            className="w-full lg:w-[25vw] p-3 outline-none border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 "
          />
        </div>
      </div>
    </>
  );
};
export default NavBar;
