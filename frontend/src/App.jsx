import React from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import Service from "./page/Service";
import Contact from "./page/Contact";
import Navbar from "./components/global/Navbar";
import NotFound from "./page/NotFound";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import Footer from "./components/global/Footer";
import HomeLayout from "./layout/HomeLayout";
import FetchAPI from "./page/FetchAPI";
import SingleProduct from "./page/SingleProduct";
import AddForm from "./page/AddForm";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/products/:id",
      element: <SingleProduct />,
    },
    {
      path: "/add-product",
      element: <AddForm />,
    },
    {
      path: "/api",
      element: <FetchAPI />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    // {
    //   path: "/dashboard",
    //   element: <DashboardLayout/>,
    //   children: [
    //     {
    //       path: "/dashboard",
    //       element: <HomeDashboar/>
    //     },
    //     {
    //       path: "/dashboard/user-management",
    //       element: <UserManagement/>
    //     },
    //   ]
    // }
  ]);

  return (
    <>
      <RouterProvider router={route} />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
};

export default App;
