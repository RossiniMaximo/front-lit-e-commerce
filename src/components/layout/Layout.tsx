import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../searchForm/SearchForm";
import { useNavigate } from "react-router-dom";
import { useLogStatusState } from "../../hooks";
import { NavLinks } from "../navLinks";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import css from "./layout.css";

export function Layout() {
  const status = useLogStatusState();
  const [isActive, setIsActive] = useState(null);
  const navigate = useNavigate();
  function goToSearch(query: string) {
    if (query != "") {
      navigate("/search/" + query);
    }
  }
  const closeMobileMenu = () => setIsActive(false);
  const hamburgerIcon = (
    <div
      className={css.hmbgMenu}
      onClick={() => {
        !setIsActive(!isActive);
      }}
    >
      <IoMdMenu size="40px" color="white" />
    </div>
  );
  const closedIcon = (
    <div
      className={css.hmbgMenu}
      onClick={() => {
        !setIsActive(!isActive);
      }}
    >
      <MdClose size="40px" color="white" />
    </div>
  );
  return (
    <div>
      <header className={css.header}>
        <nav className={css.lowResolitionNavBar}>
          {isActive ? closedIcon : hamburgerIcon}
          {isActive && (
            <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
          )}
        </nav>
        <div>
          <SearchForm onSearch={goToSearch} />
        </div>
        <nav className={css.highResolutionHeader}>
          <NavLinks />
        </nav>
      </header>
      <Outlet />
      <footer className={css.footer}></footer>
    </div>
  );
}
