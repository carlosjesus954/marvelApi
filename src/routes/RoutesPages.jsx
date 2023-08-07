import React from "react";
import { NavBar } from "../ui/NavBar";
import { Route, Routes } from "react-router-dom";
import { Characters } from "../pages/Characters";
import { Description } from "../pages/Description";

export const RoutesPages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="description" element={<Description />} />
      </Routes>
    </>
  );
};
