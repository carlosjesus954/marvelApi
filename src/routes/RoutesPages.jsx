import React from "react";
import { NavBar } from "../ui/NavBar";
import { Route, Routes } from "react-router-dom";
import { Characters } from "../pages/Characters";

export const RoutesPages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </>
  );
};
