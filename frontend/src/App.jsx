import { useEffect, useState } from "react";
import Navbar from "./components/global/Navbar";
import HomePage from "./page/HomePage";
const App = () => {
  const [count, setCount] = useState(0);
  const [isZero, setIsZero] = useState(false);

  // const btnClick = () => {
  //   setCount((prev) => prev + 1);
  //   console.log(count + 2);
  // };
  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };
  const handleSub = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    if (count > 0) {
      setIsZero(true);
    }
    if (count === 0) {
      setIsZero(false);
    }

    console.log("From useEffect");
  }, [count]);

  return (
    <>
      <div
        style={{ backgroundColor: isZero ? "bg-white" : "bg-black" }}
        className={`flex w-full justify-center items-center gap-4 ${isZero ? "bg-white" : "bg-black"}`}
      >
        {isZero && (
          <button onClick={handleSub} className="bg-blue-500">
            Sub
          </button>
        )}
        <span>{count}</span>
        <button onClick={handleAdd} className="bg-blue-500">
          {isZero ? "On" : "Off"}
        </button>
      </div>

      {/* <Navbar name={user} />
      {user.length !== 0 && <p>Welcome {user}</p>} */}
      {/* <h1 className="">Hello</h1>
      <h1 className="">Hello</h1> */}
      {/* <HomePage /> */}
    </>
  );
};

export default App;
