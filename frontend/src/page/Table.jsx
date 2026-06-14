import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Table = () => {
  const [data, setData] = useState([]);

  const handleClick = async (id) => {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        fetchData();
        toast.success("Item deleted successfully..");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error while deleting item");
      });
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex w-full justify-end">
        <button className="p-2 px-4 bg-blue-500 cursor-pointer font-bold text-white rounded-md">
          Add
        </button>
      </div>
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="bg-neutral-secondary-soft border-b border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Image
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Description
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Category
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Price
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
                >
                  <td className="px-6 py-4">
                    <img src={item.image} alt="" />
                  </td>
                  <th className="px-6 py-4">{item.title}</th>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4 flex gap-4 ">
                    <Link to={`/edit-product/${item.id}`}>
                      <button className="p-2 px-4 rounded-md cursor-pointer bg-blue-500 font-bold">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleClick(item.id)}
                      className="p-2 px-4 rounded-md cursor-pointer bg-red-500 font-bold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
