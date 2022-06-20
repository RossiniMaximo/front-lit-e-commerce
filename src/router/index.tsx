import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/home/Home";
import { Search } from "../pages/search/Search";
import { Item } from "../pages/item/Item";
import { SignUp } from "../pages/signUp/SignUp";
import { Code } from "../pages/code/Code";
import { Cart } from "../pages/cart";
import { Password } from "../pages/password";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="search/:query" element={<Search />}></Route>
        <Route path="item/:id" element={<Item />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="password" element={<Password />}></Route>
      </Route>
      <Route path="/code" element={<Code />}></Route>
    </Routes>
  );
}
