import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { Main } from "../pages/Main";
import { ScoreSearch } from "../pages/ScoreSearch";
import Detail from "../pages/Detail";
import SignUp from "../pages/SignUp";
import Community from "../pages/Community";
import Header from "../components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/scoresearch" element={<ScoreSearch />} />
        <Route path="/community" element={<Community />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
