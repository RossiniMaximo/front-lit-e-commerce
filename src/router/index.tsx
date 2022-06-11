import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { Item } from "../pages/Item";
import { SignUp } from "../pages/SignUp";
import { Code } from "../pages/Code";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="search/:query" element={<Search />}></Route>
        <Route path="item/:id" element={<Item />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
      </Route>
      <Route path="/code" element={<Code />}></Route>
    </Routes>
  );
}
