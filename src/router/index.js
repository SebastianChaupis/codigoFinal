import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "../components/NavBar";
import Private from "../layouts/Private";


//Rutas para productos
import AdminProduct from "../pages/AdminProduct"
import HomeEdit from "../pages/HomeEdit";

import DetailProduct from "../components/DetailProduct";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />}>

        </Route>
        {/*Rutas privadas */}
        <Route element={<Private/>}>
            <Route path="/admin" element={<AdminProduct/>}/>
            <Route path="/admin/:id" element={<DetailProduct/>}/>
            <Route path="/admin/home" element={<HomeEdit/>}/>
            <Route path="/admin/profile"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
