const NavBar = () => {
  return (
    <>
      <div
        className="flex justify-between
      m-2"
      >
        <div>
          <p1> {new Date().toString().slice(0, 16)}</p1>
          <p> Tastytails Foods </p>
        </div>
        <div>
        
          <input
            type="Search"
            placeholder="Search here"
            className=" border-zinc-300"
          />
        </div>
      </div>
    </>
  );
};
export default NavBar;
