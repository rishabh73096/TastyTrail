const NavBar = () => {
    return (
      <>
        <nav className="flex lg:justify-between items-center bg-gray-800 text-white p-4 shadow-md">
          <div>
            <p className="text-[23px] font-bold">Tastytails Foods</p>
          </div>
          <div className="flex-grow max-w-lg ml-8">
            <input
              type="search"
              placeholder="Search delicious food..."
              className="w-full p-3 outline-none border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-black focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
            />
          </div>
        </nav>
      </>
    );
  };
  
  export default NavBar;
  