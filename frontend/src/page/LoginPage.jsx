import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  let allData = [];
  const init = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    // console.log(`${e.target.name}: ${e.target.value}`);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username.length === 0) {
      return alert("username field required..");
    }

    if (formData.password.length < 7) {
      return alert("Password must be of 8 char..");
    }

    const res = await login(formData);
    console.log(res, ":LOGINRES");

    setFormData(init);
    navigate("/");
  };

  // console.log(formData);
  return (
    <div className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[30rem] p-8 shadow-2xl flex flex-col gap-4 rounded-lg "
      >
        <h1>Login </h1>
        <input
          onChange={handleChange}
          className="p-2 w-full rounded-md border-2"
          type="username"
          placeholder="Enter username"
          name="username"
          value={formData.username}
          required
        />
        <input
          onChange={handleChange}
          className="p-2 w-full rounded-md border-2"
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          required
        />
        <input
          className="p-2 px-4 rounded-md text-white font-bold bg-blue-600 cursor-pointer"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default LoginPage;
