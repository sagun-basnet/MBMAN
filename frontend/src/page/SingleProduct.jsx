import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const fetchData = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${parseInt(id)}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <img src={data.image} alt="product image" />
      <h1 className="text-2xl text-center">{data.title}</h1>
      <p>{data.description}</p>
      <span>Price: {data.price}</span>
    </div>
  );
};

export default SingleProduct;
