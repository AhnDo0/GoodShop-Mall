import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./src/pages/Test";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Test />}>
          <Route path="/" element={<div>Home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
