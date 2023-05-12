import React from 'react'
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Main from "../pages/Main";

function Router() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/join" element={<Join />} />
    </Routes>
</BrowserRouter>
  )
}

export default Router