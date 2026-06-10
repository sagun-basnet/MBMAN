import { Link } from "react-router-dom";
import { FaConciergeBell, FaHome } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  // console.log(name);

  return (
    <nav className="h-[5rem] shadow-2xl  bg-amber-400 flex justify-between items-center px-4">
      <h1 className="border">LOGO</h1>
      <ul className="flex gap-4 ">
        <Link to={"/"}>
          <li className="flex gap-2 items-center">
            <FaHome /> Home
          </li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/service"}>
          <li>Service</li>
        </Link>
        <Link to={"contact"}>
          <li>Contact</li>
        </Link>
      </ul>

      {currentUser ? (
        <button className="bg-red-600" onClick={() => logout()}>
          Logout
        </button>
      ) : (
        <div className="flex gap-2">
          <Link to={"/login"}>
            <button className="bg-blue-600  transition-all hover:text-lg hover:bg-blue-400">
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="bg-red-600">Register</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
