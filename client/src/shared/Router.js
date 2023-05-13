import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Join from "../pages/Join";
import { Main } from "../pages/Main";
import { ScoreSearch } from "../pages/ScoreSearch";
import Detail from "../pages/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/scoresearch" element={<ScoreSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
