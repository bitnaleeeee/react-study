import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gugudan from "./1.구구단/Gugudan";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gugudan />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
