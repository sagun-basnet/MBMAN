import React, { useState } from "react";

const LoginPage = () => {
  

  let allData = [];
  const init = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    // console.log(`${e.target.name}: ${e.target.value}`);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email.length === 0) {
      return alert("Email field required..");
    }

    if (formData.password.length < 7) {
      return alert("Password must be of 8 char..");
    }

    console.log(formData);
    allData.push(formData);

    localStorage.setItem("user", JSON.stringify(allData));

    setFormData(init);

    const myUser = localStorage.getItem("user");
    console.log(JSON.parse(myUser));

    localStorage.removeItem("user");
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
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
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
