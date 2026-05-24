const Navbar = ({ name }) => {
  console.log(name);

  return (
    <nav className="h-[5rem] shadow-2xl  bg-amber-400 flex justify-between items-center px-4">
      <h1 className="border">LOGO</h1>
      <ul className="flex gap-4 ">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
      {name.length !== 0 ? (
        <span>{name}</span>
      ) : (
        <div className="flex gap-2">
          <button className="bg-blue-600  transition-all hover:text-lg hover:bg-blue-400">
            Login
          </button>
          <button className="bg-red-600">Register</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
