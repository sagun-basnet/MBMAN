import axios from "axios";
import { useState } from "react";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      price: parseFloat(price),
      description,
      category,
      image,
    };
    // console.log("Form data:", formData);

    await axios
      .post("https://fakestoreapi.com/products", formData)
      .then((res) => {
        console.log(res);
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen grid place-items-center">
      <div className="shadow-2xl max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl border border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-lg font-medium text-gray-800">Add product</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Cool T-shirt"
                required
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Price</label>
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="9.99"
                required
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What's this product about?"
              required
              rows={3}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400 transition-colors resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. electronics"
                required
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Image URL</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://..."
                required
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 active:scale-[0.98] transition-all cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
