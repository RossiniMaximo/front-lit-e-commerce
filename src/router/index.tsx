import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/home/Home";
import { Search } from "../pages/search/Search";
import { Item } from "../pages/item/Item";
import { Code } from "../pages/code/Code";

const differPassword = lazy(() => import("../pages/password"));
const differSignUp = lazy(() => import("../pages/signUp/SignUp"));
const differCart = lazy(() => import("../pages/cart"));

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="search/:query" element={<Search />}></Route>
        <Route path="item/:id" element={<Item />}></Route>
        <Route path="sign-up" element={<differSignUp />}></Route>
        <Route path="cart" element={<differCart />}></Route>
        <Route path="password" element={<differPassword />}></Route>
      </Route>
      <Route path="/code" element={<Code />}></Route>
    </Routes>
  );
}
