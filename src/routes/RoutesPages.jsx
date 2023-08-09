import React from "react";
import { NavBar } from "../ui/NavBar";
import { Route, Routes } from "react-router-dom";
import { Characters } from "../pages/Characters";
import { Description } from "../pages/Description";
import { Favoritos } from "../pages/Favoritos";

export const RoutesPages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="description" element={<Description />} />
        <Route path="favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
};
