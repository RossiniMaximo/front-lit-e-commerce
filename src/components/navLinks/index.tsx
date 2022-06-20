import React from "react";
import css from "./navLinks.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NavLinks(props) {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul className={css.ul}>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        className={css.li}
      >
        <Link
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className={css.a}
          to="/"
        >
          Home
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        className={css.li}
      >
        <Link
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className={css.a}
          to="/cart"
        >
          Cart
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        className={css.li}
      >
        <Link
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className={css.a}
          to="/sign-up"
        >
          SignUp
        </Link>
      </motion.li>
    </ul>
  );
}
