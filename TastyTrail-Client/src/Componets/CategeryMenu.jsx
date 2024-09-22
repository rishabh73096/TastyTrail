const CategeryMenu = () => {
  return (
    <>
      <div className="m-5 ms-7 ">
        <h2 className="text-[21px] mb-5 font-semibold"> Find the best food</h2>
        <div className="w-full flex lg:overflow-hidden sm:overflow-x-auto overflow-x-auto gap-3 justify-center lg:justify-start scroll-smooth">
          <button className="btn px-3 py-1 bg-gray-300 text-black font-bold rounded-md shadow-md hover:bg-orange-500 active:bg-orange-600 sm:px-6 sm:py-3 transition-all duration-300 ease-in-out">
            All
          </button>
          <button className="btn px-3 py-1 bg-gray-300 text-black font-bold rounded-md shadow-md hover:bg-orange-500 active:bg-orange-600 sm:px-6 sm:py-3 transition-all duration-300 ease-in-out">
            Lunch
          </button>
          <button className="btn px-3 py-1 bg-gray-300 text-black font-bold rounded-md shadow-md hover:bg-orange-500 active:bg-orange-600 sm:px-6 sm:py-3 transition-all duration-300 ease-in-out">
            Breakfast
          </button>
          <button className="btn px-3 py-1 bg-gray-300 text-black font-bold rounded-md shadow-md hover:bg-orange-500 active:bg-orange-600 sm:px-6 sm:py-3 transition-all duration-300 ease-in-out">
            Dinner
          </button>
          <button className="btn px-3 py-1 bg-gray-300 text-black font-bold rounded-md shadow-md hover:bg-orange-500 active:bg-orange-600 sm:px-6 sm:py-3 transition-all duration-300 ease-in-out">
            Snacks
          </button>
        </div>
      </div>
    </>
  );
};
export default CategeryMenu;
