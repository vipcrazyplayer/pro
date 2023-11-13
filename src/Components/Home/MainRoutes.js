import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddForm from "./AddForm";
import Layout from "./Layout";
import EditForm from "./EditForm";
import NotFound from "./NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/edit/:id" element={<EditForm />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
