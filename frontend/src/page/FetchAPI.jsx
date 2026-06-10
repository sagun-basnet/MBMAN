import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchAPI = () => {
  const Loading = () => {
    return <h1>LOADING....</h1>;
  };
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div>
        <div className="grid gap-4 grid-cols-4">
          {data.map((item, index) => {
            return (
              <Link to={`/products/${item.id}`}>
                <div className="h-[20rem]  border-2" key={item.id}>
                  <h1 className="text-2xl">{item.title.slice(0, 30)}...</h1>
                  <p>{item.description.slice(0, 70)}....</p>
                  <span className="text-lg font-bold">{item.price}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};

export default FetchAPI;
