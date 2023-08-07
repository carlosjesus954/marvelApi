import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesPages } from "../routes/RoutesPages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<RoutesPages />} />
      </Routes>
    </>
  );
};
