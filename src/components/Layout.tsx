import React from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import { useNavigate } from "react-router-dom";
import { useLogStatusState } from "../hooks";
import { Link } from "react-router-dom";
import css from "./layout.css";

export function Layout() {
  const status = useLogStatusState();
  console.log("status :", status);

  const navigate = useNavigate();
  function goToSearch(query: string) {
    navigate("/search/" + query);
  }
  return (
    <div>
      <header className={css.header}>
        <div>
          <SearchForm onSearch={goToSearch} />
        </div>
        <div className={css.highResolutionHeader}>
          <Link className={css.link} to={"/"}>
            Home
          </Link>
          <Link className={css.link} to={"/profile"}>
            Profile
          </Link>
          <Link className={css.link} to={"/cart"}>
            Cart
          </Link>
          {!status ? (
            <Link className={css.link} to={"/sign-up"}>
              Sign up
            </Link>
          ) : (
            ""
          )}
        </div>

        <div className={css.headerOptions}>
          <p className={css.home}>Home</p>
          <p className={css.profile}>Me</p>
          <p className={css.cart}>Cart</p>
        </div>
      </header>
      <Outlet />
      <footer className={css.footer}></footer>
    </div>
  );
}
