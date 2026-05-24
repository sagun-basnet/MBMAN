import Navbar from "./components/global/Navbar";
import HomePage from "./page/HomePage";
const App = () => {
  const user = "Jhoo";

  return (
    <>
      <Navbar name={user} />
      {user.length !== 0 && <p>Welcome {user}</p>}
      {/* <h1 className="">Hello</h1>
      <h1 className="">Hello</h1> */}
      {/* <HomePage /> */}
    </>
  );
};

export default App;
