import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SearchForm } from "../searchForm/SearchForm";
import { useNavigate } from "react-router-dom";
import { NavLinks } from "../navLinks";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import css from "./layout.css";

export function Layout() {
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
      <footer className={css.footer}>
        <ul className={css.list_link}>
          <li className={css.first_link}>
            <div className={css.link_content}>
              <FiLinkedin size="20" color="bisque" />
              <a
                href="https://www.linkedin.com/in/maximo-rossini-fullstack/"
                className={css.link}
              >
                LinkedIn
              </a>
            </div>
          </li>
          <li className={css.second_link}>
            <div className={css.link_content}>
              <CgProfile size="20" color="bisque" />
              <div className={css.link_container}>
                <a className={css.link} href="https://apx.school/my-profile">
                  Profile
                </a>
              </div>
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
}
